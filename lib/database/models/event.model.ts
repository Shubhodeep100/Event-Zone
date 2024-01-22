import { Schema, model, models } from "mongoose";

const EventSchema = new Schema({
  title: { type: String, required: true },
  decription: { type: String },
  location: { type: String },
  createdAt: { type: Date, default: Date.now },
  imageUrl: { type: String, required: true },
  startDateTime: { type: Date, default: Date.now },
  endDtaeTime: { type: String, default: Date.now },
  price: { type: String },
  isFree: {type: Boolean, default: false},
  url: {type: String},
  category: {type:Schema.Types.ObjectId, ref: 'Category'},
  organizer: {type: Schema.Types.ObjectId, ref: 'User'},
});
const Event  = models.Event || model('Event', EventSchema);
export default Event;
