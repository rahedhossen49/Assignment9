exports.create = async (req, res) => {
    
    res.status(200).json({ status: 'success', data: 'Admin Created' });
  };
  
  exports.read = async (req, res) => {
    
    res.status(200).json({ status: 'success' , data: 'Admin Read ' });
  };
  
  exports.delete = async (req, res) => {
    
    res.status(200).json({ status: 'success',data: 'Admin Deleted ' });
  };
  
  exports.update = async (req, res) => {
    
    res.status(200).json({ status: 'success',data: 'Admin Updated' });
  };