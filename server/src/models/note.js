import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Note = new Schema({
	name: { type: 'String', default: 'New note' },
	task: { type: 'String', default: 'New task' },
	priority: { type: 'String', default: 'normal' },
	dueDate: { type: Date, default: null },
	creationDate: { type: Date, default: Date.now },
	taken: { type: Schema.ObjectId, ref: 'User' },
	admins: [{ type: Schema.ObjectId, ref: 'User' }],
	users: [{ type: Schema.ObjectId, ref: 'User' }],
});

export default mongoose.model('Note', Note);

Note.pre('remove', function (next) {
	this.model('Lane').update({notes: this._id}, {$pull: { notes: this._id }});
	next();
})
