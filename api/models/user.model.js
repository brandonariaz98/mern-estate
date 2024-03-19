import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.business2community.com%2Fsocial-media-articles%2Fimportance-profile-picture-career-01899604&psig=AOvVaw0ukTzDIEh2l2Odg7-HOR4-&ust=1710958652244000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIj_qOf3gIUDFQAAAAAdAAAAABAE"
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;