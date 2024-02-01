exports.create = (req, res) => {
    res.send({message: "create handler"});
};

exports.findAll = (req, res) => {
    res.send({message: "finalALL handler"});
};

exports.findOne = (req, res) => {
    res.send({message: "final handler"});
};

exports.update = (req, res) => {
    res.send({message: "update handler"});
};


exports.delete = (req, res) => {
    res.send({message: "delete handler"});
};

exports.deleteAll = (req, res) => {
    res.send({message: "deleteAll handler"});
};

exports.findAllFavorites = (req, res) => {
    res.send({message: "finalAllFavorites handler"});
};