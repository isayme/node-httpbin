.PHONY: image

APP_VERSION = $(shell node -e "pkg = require('./package'); console.log(pkg.version)")

image:
	docker build -t node-httpbin:${APP_VERSION} .
