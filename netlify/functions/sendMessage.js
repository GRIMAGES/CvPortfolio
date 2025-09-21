exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);

    // For now, just log message (no DB yet)
    console.log("Message received:", body);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Message received!" }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: err.message }),
    };
  }
};
