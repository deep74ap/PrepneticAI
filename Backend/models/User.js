// User Schema
const userSchema = new mongoose.Schema({
  photoUrl: { type: String, default: "" },
  email: { type: String, required: true, unique: true, match: [/\S+@\S+\.\S+/, 'Please enter a valid email'] },
  password: { type: String, required: true },
  name: { type: String, default: "" },
  bio: { type: String, default: "" },
  skills: { type: [String], default: [] },
  feedbacks: [feedbacksSchema],  // Nested feedbacks schema
}, { timestamps: true });  // Adds createdAt and updatedAt


module.exports = mongoose.model('User', userSchema);
