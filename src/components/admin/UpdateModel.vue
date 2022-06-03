<template>
  <v-data-table
    :headers="headers"
    :items="users"
    sort-by="id"
    class="elevation-1"
  >
    <template v-slot:[`item.is_active`]="{item}">
      <v-simple-checkbox v-model="item.is_active" disabled></v-simple-checkbox>
    </template>
    <template v-slot:[`item.is_superuser`]="{item}">
      <v-simple-checkbox
        v-model="item.is_superuser"
        disabled
      ></v-simple-checkbox>
    </template>
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>USERS</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{on, attrs}">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              New User
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.employee_id"
                      label="사번"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.password"
                      label="비밀번호"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.username"
                      label="이름"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.email"
                      label="이메일"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.phone"
                      label="핸드폰"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-checkbox
                      v-model="editedItem.is_active"
                      label="활성화"
                    ></v-checkbox>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-checkbox
                      v-model="editedItem.is_superuser"
                      label="관리자"
                    ></v-checkbox>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Are you sure you want to delete this user?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{item}">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>
<script>
import {api} from "@/api/api";
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "ID",
        align: "start",
        sortable: false,
        value: "id",
      },
      {text: "Employee ID", value: "employee_id"},
      {text: "User active", value: "is_active"},
      {text: "User admin", value: "is_superuser"},
      {text: "User Name", value: "username"},
      {text: "Email", value: "email"},
      {text: "Phone", value: "phone"},
      {text: "Actions", value: "actions", sortable: false},
    ],
    users: [],
    editedIndex: -1,
    editedItem: {
      id: "",
      employee_id: 0,
      password: "",
      username: "",
      email: "",
      phone: "",
    },
    defaultItem: {
      id: "",
      employee_id: "",
      password: "",
      username: "",
      email: "",
      phone: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      api
        .getUsers()
        .then((res) => {
          console.log(res);
          this.users = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    editItem(item) {
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.users.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.users[this.editedIndex], this.editedItem);
        const fromData = {
          employee_id: this.editedItem.employee_id,
          password: this.editedItem.password,
          username: this.editedItem.username,
          email: this.editedItem.email,
          phone: this.editedItem.phone,
          is_active: true,
          is_superuser: true,
        };

        api
          .updateUser(parseInt(this.users[this.editedIndex].id), fromData)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.users.push(this.editedItem);
        const fromData = {
          employee_id: this.editedItem.employee_id,
          password: this.editedItem.password,
          username: this.editedItem.username,
          email: this.editedItem.email,
          phone: this.editedItem.phone,
          //   is_active: true,
          //   is_superuser: true,
        };
        api
          .setUser(fromData)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      this.close();
    },
  },
};
</script>
