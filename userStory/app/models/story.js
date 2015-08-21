var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var storySchema = new Schema ({

	ceator: {type: Schema.Types.ObjectId, ref: 'User'},
	content: String,
	created: {type:Date, default: Date.now}
});

module.exports = mongoose.model('Story',storySchema);