<template>
  <default-layout>
    <section class="container">
      <div class="messages-main">
        <h1>{{ $t("chatPage.messages") }}</h1>
        <div class="message-container">
          <div class="message-left">
            <h3>{{ $t("chatPage.allMessages") }}</h3>
            <div :class="['search', { 'set-lang': $t('lang') == 'ar' }]">
              <img src="../assets/images/msg-search.svg" />
              <input
                type="text"
                :placeholder="$t('chatPage.searchMessages')"
                v-model="search"
              />
            </div>
            <div class="primary-users">
              <div
                class="user"
                v-for="(chat, index) in getConversation"
                :key="index"
                @click="getAllMessages(chat)"
              >
                <MessageCard
                  :conversation="chat"
                  @click="setName(chat?.receiverId?._id != $store.state.auth.user?._id ? chat?.receiverId.firstName : chat?.senderId.firstName)"
                />
              </div>
              <!-- <div>
                <h1>Users</h1>
              </div>
              <div
                v-for="(chat, index) in allUsers"
                :key="index"
                @click="createConversation(chat)"
              >
                <MessageCard
                  @click="setName(chat.firstName)"
                  :conversation="chat"
                  :usersCard="true"
                  v-if="chat.firstName"
                />
              </div> -->
            </div>
          </div>
          <!-- / -->
          <div class="message-right" v-if="chatWith">
            <div class="msg-top">
              <div class="msg-image">
                <img src="../assets/images/msg-profile.svg" />
              </div>
              <div class="msg-title">
                <h6>{{ userName ? userName : "jhon Doe" }}</h6>
              </div>
            </div>
            <div class="chating-container" ref="scrollFun">
              <div v-for="(chat, index) in messages" :key="index">
                <div v-if="chat.message">
                  <UserChat
                    v-if="chat.sender != $store.state.auth.user._id"
                    :messages="chat"
                  />
                  <MyChat :messages="chat" v-else />
                </div>
              </div>
            </div>
            <div class="text-msg">
              <input
                type="text"
                placeholder="Write Something"
                v-model="chatMessage"
                v-on:keyup.enter="send()"
              />
              <img src="../assets/images/send.svg" @click="send()" />
            </div>
          </div>
          <!-- / placeholder -->
          <div class="message-right placeholder-image" v-else>
            <img src="../assets/chat-placeholder.svg" />
          </div>
        </div>
      </div>
    </section>
  </default-layout>
</template>

<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import MessageCard from "@/components/message/messageCard.vue";
import UserChat from "@/components/message/userChat.vue";
import MyChat from "@/components/message/myChat.vue";
import { io } from "socket.io-client";
export default {
  name: "HotelDetailView",
  components: {
    DefaultLayout,
    MessageCard,
    UserChat,
    MyChat,
  },
  data() {
    return {
      search: "",
      conversation: [],
      messages: [],
      //
      userName: "",
      chatUserName: "",
      //
      chatMessage: "",
      //
      allUsers: [],
      //
      chatWith: null,
      //
      socket: null,
    };
  },
  computed: {
    getConversation() {
      var search = this.search;
      if (search) {
        return this.conversation.filter((key) =>
          key.receiverId.firstName
            .toLowerCase()
            .startsWith(search.toLowerCase())
        );
      }else{
        return this.conversation
      }
    },
  },
  mounted() {
    this.getAllConverstion();
    // console.log(this.timeSince('1666727737165'))
    // var check = new Date('2022-12-27T12:32:32.274Z')
    // console.log(this.timeSince(check))
    // console.log(check.toString())
    this.getAllUsers();
  },
  methods: {
    async createConversation(chat) {
      this.userName = chat.firstName;
      try {
        const createNow = await this.$axios.post(`conversation`, {
          msg: "",
          receiverId: chat._id,
        });
        if (createNow) {
          this.getAllMessages(createNow.data.conversation, true);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getAllConverstion() {
      try {
        const conversation = await this.$axios.get("conversation");
        this.conversation = conversation.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getAllUsers() {
      try {
        const allUsers = await this.$axios.get("conversation/users");
        this.allUsers = allUsers.data;
        console.log("allUsers", allUsers);
      } catch (error) {
        console.log(error);
      }
    },
    setName(name) {
      this.userName = name;
    },
    async getAllMessages(chat) {
      // if (!isName) {
        // if (chat.receiverId._id != this.$store.state.auth.user._id) {
          // this.userName = chat.receiverId.firstName;
        // }
        //  else {
        //   this.userName = chat.senderId.firstName;
        // }
      // }
      this.chatWith = chat;
      try {
        const messages = await this.$axios.get(`message/${chat._id}`);
        this.messages = messages.data.messages;
      } catch (error) {
        console.log(error);
      }
    },
    async send() {
      try {
        const sent = await this.$axios.post(`message`, {
          msg: this.chatMessage,
          conversationId: this.chatWith._id,
        });
        if (sent) {
          this.messages = [...this.messages, sent.data.message];
          this.chatMessage = "";
        }
      } catch (error) {
        console.log(error);
      }
    },
    getProfile() {
      const newMessageCheck = (data) => {
        this.messages = [...this.messages, data.message];
      };
      this.socket = io("https://www.testingserver.tech:6000", {
        query: {
          userId: `${this.$store.state.auth.user._id}`,
        },
      });
      this.socket.on("connect", () => {
        console.log("socket connected");
      });
      this.socket.on("newMessage", (arg) => {
        console.log("message", arg);
        newMessageCheck(arg);
      });
    },
  },
  watch: {
    "$store.state.auth.user": {
      immediate: true,
      handler(user) {
        if (user) {
          this.getProfile();
        }
      },
    },
    "$store.state.auth.chatFromDetail": {
      immediate: true,
      handler(user) {
        if (user) {
          this.createConversation(user);
          this.setName(user.firstName);
        }
      },
    },
    messages() {
      setTimeout(() => {
        this.$refs.scrollFun.scrollTop = this.$refs.scrollFun.scrollHeight;
      }, 100);
    },
  },
};
</script>
<style scoped>
.set-lang input {
  text-align: right !important;
  direction: rtl !important;
}
.messages-main {
  padding: 30px 0;
}
.messages-main h1 {
  font-size: 20px;
  letter-spacing: 0.7px;
  color: #231f20;
  opacity: 0.8;
}
.message-container {
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
}
.message-container .message-left {
  width: 30%;
}
.message-container .message-left h3 {
  text-align: left;
  letter-spacing: 0.5px;
  color: #231f20;
  opacity: 0.8;
  font-size: 14px;
}
.message-container .message-left .search {
  box-shadow: 0px 0px 7px #0000001a;
  border-radius: 8px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 25px;
  margin: 15px 0;
}
.message-container .message-left .search img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.message-container .message-left .search input {
  border: none;
  outline: none;
  padding: 20px 0px;
  font-size: 14px;
  width: 100%;
}
.message-container .message-right {
  width: 69%;
  box-shadow: 0px 0px 39px #00000012;
  border-radius: 17px;
  opacity: 1;
  min-height: 500px;
  margin-top: 29px;
  position: relative;
}
.message-container .message-right .msg-top {
  padding: 5px 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #00000012;
  margin-bottom: 15px;
}
.message-container .message-right .msg-top .msg-image {
  width: 47px;
  height: 47px;
  border-radius: 50%;
}
.message-container .message-right .msg-top .msg-image img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.message-container .message-right .msg-top .msg-title {
  margin-left: 5px;
}
.message-container .message-right .msg-top .msg-title h6 {
  text-align: left;
  line-height: 1.8;
  letter-spacing: 0.34px;
  color: #231f20;
  opacity: 0.8;
  font-size: 14px;
}
.text-msg {
  display: flex;
  align-items: center;
  margin: 15px 20px;
  position: absolute;
  bottom: 0;
  width: 100%;
}
.text-msg img {
  width: 35px;
  height: 35px;
  margin-left: 15px;
  cursor: pointer;
}
.text-msg input {
  border: none;
  outline: none;
  color: #0e4763;
  font-size: 14px;
  width: 85%;
  padding: 18px 20px;
  box-shadow: 0px 0px 29px #00000012;
  border-radius: 36px;
  opacity: 1;
}
.chating-container {
  height: 354px;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
.placeholder-image img {
  width: 290px;
  opacity: 0.5;
}
.user {
  cursor: pointer;
  margin: 4px;
}
.primary-users {
  height: 400px;
  overflow-y: scroll;
}
</style>
