const http = require('http');

console.log('🧪 Testing Playlistify AI Installation...\n');

// Test health endpoint
const options = {
  hostname: 'localhost',
  port: 3001,
  path: '/health',
  method: 'GET'
};

const req = http.request(options, (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    if (res.statusCode === 200) {
      console.log('✅ Server is running!');
      console.log('📊 Health check response:', JSON.parse(data));
      console.log('\n🎉 Installation successful!');
      console.log('🌐 Access the app at: http://localhost:3001');
      console.log('\n📝 Next steps:');
      console.log('   1. Open http://localhost:3001 in your browser');
      console.log('   2. Describe a mood or activity');
      console.log('   3. Get your personalized playlist!');
    } else {
      console.log('❌ Server responded with status:', res.statusCode);
    }
  });
});

req.on('error', (error) => {
  console.log('❌ Server is not running!');
  console.log('\n💡 Start the server with:');
  console.log('   npm run dev    (development mode)');
  console.log('   OR');
  console.log('   npm start      (production mode)');
  console.log('\n📚 See QUICKSTART.md for more details');
});

req.end();
