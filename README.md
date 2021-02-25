

### Get started 
You will need node and preferably yarn installed (although npm will probably work fine)

The wasm package is in the source code, so in theory you shouldnt need to build the rust module

##### To install wasm-pack for rust
yarn global install wasm-pack

##### Build wasm library, install, and run react app 
./run.sh

### Library is already compiled and attached, so you can just skip the wasm bit and run the app if preferred
cd ./app
yarn start


##### Run tests
wasm-pack test --chrome
cd ./app && yarn test
