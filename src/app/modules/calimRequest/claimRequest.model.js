import { Schema, model, Types } from 'mongoose';

const itemRequestSchema = new Schema({
  itemId: {
    type: Types.ObjectId,
    ref: 'Item',      
    required: true
  },
  userId: {
    type: Types.ObjectId,
    ref: 'User',      
    required: true
  },
},{timestamps:true});

export const ItemRequest = model('ItemRequest', itemRequestSchema);
