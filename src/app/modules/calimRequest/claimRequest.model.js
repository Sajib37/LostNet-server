import { Schema, model, Types } from 'mongoose';

const itemRequestSchema = new Schema({
  itemId: {
    type: Types.ObjectId,
    ref: 'Item',      
    required: true
  },
  requestedBy: {
    type: Types.ObjectId,
    ref: 'User',      
    required: true
  },
  isDeleted: {
    type: Boolean,
    required: true,
    default:false
  }
},{timestamps:true});

export const ItemRequest = model('ItemRequest', itemRequestSchema);
