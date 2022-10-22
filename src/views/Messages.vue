<template>
  <default-layout>
    <section class="container">
      <div class="messages-main">
        <h1>MESSAGES</h1>
        <div class="message-container">
          <div class="message-left">
            <h3>ALL MESSAGES</h3>
            <div class="search">
              <img src="../assets/images/msg-search.svg" />
              <input type="text" placeholder="Search Messages" />
            </div>
            <div
              v-for="(chat, index) in conversation"
              :key="index"
              @click="getAllMessages(chat)"
            >
              <MessageCard :conversation="chat" />
            </div>
            <!-- <div>
              <h1>Users</h1>
            </div>
            <div
              v-for="(chat, index) in allUsers"
              :key="index"
              @click="getAllMessages(chat)"
            >
              <MessageCard
                :conversation="chat"
                :usersCard="true"
                v-if="chat.firstName"
              />
            </div> -->
          </div>
          <div class="message-right">
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
              />
              <img src="../assets/images/send.svg" @click="send()" />
            </div>
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
      conversation: [],
      messages: [],
      //
      userName: "",
      //
      chatMessage: "",
      //
      allUsers: [],
      socket: null,
      //
      selectedUser: {},
    };
  },
  computed: {
    user: function () {
      return this.$store.state.auth.user;
    },
  },
  created() {
    this.socket = io("https://www.testingserver.tech");
  },
  mounted() {
    const newMessageCheck = (data) => {
      let newMessage = {
        conversationId: this.messages[0].conversationId,
        sender: data.senderId,
        message: data.text,
      };
      this.messages = [...this.messages, newMessage];
    };
    this.socket.on("getMessage", (arg) => {
      newMessageCheck(arg);
    });
    // this.getAllUsers();
  },
  methods: {
    async getAllConverstion(id) {
      try {
        const conversation = await this.$axios.get(
          `conversation/newConversation/${id}`
        );
        this.conversation = conversation.data;
        console.log("==> conversation", this.conversation);
      } catch (error) {
        console.log(error);
      }
    },
    async getAllUsers() {
      try {
        const allUsers = await this.$axios.get("conversation/users");
        this.allUsers = allUsers.data;
        console.log("==> usersAll", this.allUsers);
      } catch (error) {
        console.log(error);
      }
    },
    async getAllMessages(chat) {
      if (chat.receiverId._id != this.$store.state.auth.user._id) {
        this.userName = chat.receiverId.firstName;
      } else {
        this.userName = chat.senderId.firstName;
      }
      this.selectedUser = chat;
      try {
        const messages = await this.$axios.get(
          `message/newMessage/${chat._id}`
        );
        this.messages = messages.data;
        console.log("==> Messages", this.messages);
      } catch (error) {
        console.log(error);
      }
    },
    async send() {
      // const receiverId = this.messages.find((r) => r.sender != this.user._id);
      this.socket.emit("sendMessage", {
        senderId: this.user._id,
        receiverId: this.selectedUser.receiverId._id,
        text: this.chatMessage,
      });
      try {
        const sent = await this.$axios.post(`message/newMessage`, {
          conversationId: this.selectedUser._id,
          sender: this.user._id,
          message: this.chatMessage,
        });
        if (sent) {
          this.messages = [...this.messages, sent.data];
          this.chatMessage = "";
          console.log("==> Sended Messages", sent);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  watch: {
    user(user) {
      this.socket.on("connect", () => {
        this.socket.emit("addUser", user._id);
        console.log("socket connected");
      });
      this.getAllConverstion(user._id);
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
</style>
