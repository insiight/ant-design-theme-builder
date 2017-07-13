.PHONY: default all env start

default: deps-node

all: default

env:
	@echo node version `node --version`
	@echo npm version `npm --version`
	@git --version

start: deps-node
	node node_modules/webpack-dev-server/bin/webpack-dev-server --host=0.0.0.0 --content-base=docs --hot --inline --watch --history-api-fallback

clean:
	rm -fr docs

less: deps-node
	node_modules/.bin/static -p 8888 -H '{"Access-Control-Allow-Origin": "*"}'

build: deps-node clean build-less
	NODE_ENV=production node node_modules/webpack/bin/webpack --progress

build-less:
	./node_modules/.bin/babel tools/copyAntdLessFiles.js -o tools/copyAntdLessFiles.es6.js && node tools/copyAntdLessFiles.es6.js && rm tools/copyAntdLessFiles.es6.js

build-demo: deps-node
	./node_modules/.bin/babel tools/demoBuilder.js -o tools/demoBuilder.es6.js && node tools/demoBuilder.es6.js && rm tools/demoBuilder.es6.js

################################################################################
# Node

.PHONY: deps-node clean-deps-node
NODE_BINS = node_modules/.bin

$(NODE_BINS): node_modules

node_modules: package.json
	npm install
	@touch node_modules
	@touch $(NODE_BINS)

deps-node: $(NODE_BINS)

clean-deps-node:
	-rm -rf node_modules
