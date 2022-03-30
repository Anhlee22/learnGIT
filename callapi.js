const axios = require('axios').default;

async function Create(){
  const data = {
    'name' : 'Lê Hoàng Anh2',
    'avatar' : 'https://cdn.fakercloud.com/avatars/lmjabreu_128.jpg'
  }
  const CreateUser = await axios.post("https://624061412aeb48a9af735b00.mockapi.io/users",data)
  console.log(CreateUser.data)
}

async function GetDetailbyid(){
  const GetDetailId = await axios.get('https://624061412aeb48a9af735b00.mockapi.io/users/106')
  console.log(GetDetailId.data)
}

async function Deletebyid(){
  const Deleteid = await axios.delete('https://624061412aeb48a9af735b00.mockapi.io/users/105')
  console.log(GetDetailId.data)
}

async function Update(){
  const data = {
    'name' : 'Lê Hoàng Anh3',
    'avatar' : 'https://cdn.fakercloud.com/avatars/lmjabreu_128.jpg'
  }
  const Updateid = await axios.put('https://624061412aeb48a9af735b00.mockapi.io/users/106',data)
  console.log(Updateid.data)
}

async function GetAll(){
  const getalluser = await axios.get('https://624061412aeb48a9af735b00.mockapi.io/users/')
  console.log(getalluser.data)
}

// Create();
// GetDetailbyid();
// Deletebyid();
// Update();
GetAll();
