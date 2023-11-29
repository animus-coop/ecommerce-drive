#building command
echo "building Command"
 rm -rf ./build
 npm run build-command
 if [[ $OSTYPE == 'darwin'* ]]; then
  alias sed=gsed
 fi
 sed -i"" "3i\var dotEnv = require('dotenv');" build/constants/config.js
 sed -i""  "4i\dotEnv.config();" build/constants/config.js