const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
    id_R: {
        type: String,
        unique: true,
        maxlength: 100
    },
    role_name: {
        type: String,
        required: true
    },
    AccessBO: Boolean,
    AccessPOS: Boolean
}, {
    timestamps: true
});

const RoleModel = mongoose.model('Role', RoleSchema);
module.exports = RoleModel;
