const { default: Subscriber } = require("../models/subscriberModel");

exports.getSubscriber = async (req, res) => { 
    try { 
        const subscriber = await Subscriber.find();
        res.json(subscriber);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

exports.getSubscriberById = async (req, res) => { 
    const { id } = req.params;
    try {
        const subscriber = await Subscriber.findOne({ id: id });
        res.json(subscriber);
    } catch (error) { 
        res.status(404).json({ error: error.message });
    }
}

exports.createSubscriber = async (req, res) => { 
    const { name, email, zipcode } = req.body;
    try {
        const newSubscriber = await Subscriber.req.body
        const savedSubscriber = await newSubscriber.save();
        res.status(201).json(savedSubscriber);
    } catch (error) { 
        res.status(404).json({ error: error.message });
    }
}

exports.updateSubscriber = async (req, res) => { 
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const updateSubscriber = await Subscriber.findByIdAndUpdate(
            { _id: id },
            { name, email },
            { new: true, runValidators: true }
        );
        if (!updateSubscriber) {
            return res.status(404).json({ error: "Subscriber not found" });
        }
        res.json(updateSubscriber);
    } catch (error) { 
        res.status(404).json({ error: error.message });
    }
}

exports.deletedSubscriber = async (req, res) => { 
    const { id } = req.params;
    try {
        const deletedSubscriber = await Subscriber.findByIdAndDelete({ _id: id });
        if (!deletedSubscriber) {
            return res.status(404).json({ error: "Subscriber not found !" });
        }
        res.json(deletedSubscriber);
    } catch (error) { 
        res.status(404).json({ error: error.message });
    }
}