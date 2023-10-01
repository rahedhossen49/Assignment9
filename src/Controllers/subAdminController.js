exports.create = async (req, res) => {
    res
      .status(200)
      .json({ status: "success",  data: "Created subAdmin" });
  };
  
  exports.read = async (req, res) => {
    res
      .status(200)
      .json({ status: "success", data: "Read subAdmin" });
  };
  
  exports.delete = async (req, res) => {
    res
      .status(200)
      .json({ status: "success", data: "Deleted subAdmin" });
  };
  
  exports.update = async (req, res) => {
    res
      .status(200)
      .json({ status: "success", data: "Updated subAdmin" });
  };
  