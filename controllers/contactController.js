const ContactMessage = require('../models/ContactMessage');

exports.createMessage = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: 'All fields are required.' });
        }
        const newMessage = new ContactMessage({ name, email, subject, message });
        await newMessage.save();
        res.status(201).json({ message: 'Message stored successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to store message' });
    }
};
