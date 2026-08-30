const getHealth = (req, res) => {
  res.status(200).json({
    success: true,
    status: "UP",
    service: "devops-node-api",
    timestamp: new Date().toISOString()
  });
};

const getReadiness = (req, res) => {
  res.status(200).json({
    success: true,
    status: "READY"
  });
};

module.exports = {
  getHealth,
  getReadiness
};
