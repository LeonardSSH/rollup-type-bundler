# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.0.3](https://github.com/favware/rollup-type-bundler/compare/v1.0.2...v1.0.3) (2021-07-12)

### Bug Fixes

- change engine requirement from Node 16 to Node 14 ([6ba5e28](https://github.com/favware/rollup-type-bundler/commit/6ba5e28dad22534ff673650b76da90c437b7f0d7))

### [1.0.2](https://github.com/favware/rollup-type-bundler/compare/v1.0.1...v1.0.2) (2021-07-04)

### Bug Fixes

- fixed rollup not outputting to disk ([f2bcd33](https://github.com/favware/rollup-type-bundler/commit/f2bcd33fa22ebf812909a476cb1350c57886a127))

### [1.0.1](https://github.com/favware/rollup-type-bundler/compare/v1.0.0...v1.0.1) (2021-07-02)

### Bug Fixes

- set an opinionated default of "./dist" for the "--dist" option ([3e6e096](https://github.com/favware/rollup-type-bundler/commit/3e6e096218ac8c02878bb4fc0693ab35dc78ad77))

## [1.0.0](https://github.com/favware/rollup-type-bundler/compare/v0.0.1-next.0...v1.0.0) (2021-07-02)

### Features

- improve logging ([7953008](https://github.com/favware/rollup-type-bundler/commit/7953008c2527e083e2eb9a2bd52fc81d88ec2b23))
- log when steps are completed ([f2e7e3b](https://github.com/favware/rollup-type-bundler/commit/f2e7e3b7f53af3ddf4e13ae106a7258b41c7b637))

### Bug Fixes

- do not publish source maps ([21c9d93](https://github.com/favware/rollup-type-bundler/commit/21c9d934f2cd9505ebc51cef427ee905cec8e487))
- ensure dist can be set through config file ([9a1b102](https://github.com/favware/rollup-type-bundler/commit/9a1b1022a3f2b2bed945e6304e8220a5f7211b27))
- fixed file scanning in type bundler ([9375549](https://github.com/favware/rollup-type-bundler/commit/93755495277cfc2577f081236c2b169474e1b7c1))
- fixed getting config file paths ([b644e3b](https://github.com/favware/rollup-type-bundler/commit/b644e3b23028b73878ed5f77a7d18d40c4710789))
- use options.dist for filtering out index.d.ts in cleaning extraneous types ([53fb21e](https://github.com/favware/rollup-type-bundler/commit/53fb21e1c485400dd432fa24e59e064aeab25f91))
- wait for files to be build before running rollup ([1eb2b07](https://github.com/favware/rollup-type-bundler/commit/1eb2b079aa7ec4d9ec60f5889f1bd244d5d4d019))

### 0.0.1-next.0 (2021-07-01)

### Features

- add base CLI tool and parsing options ([785ac0c](https://github.com/favware/rollup-type-bundler/commit/785ac0c8fb96991521b39cbb909e1c05ee609156))
- add build code and remove dist exist checking ([b91b873](https://github.com/favware/rollup-type-bundler/commit/b91b87334fd99f78332c07be81745d21597ce4e0))
- add first 2 actions ([a8ca033](https://github.com/favware/rollup-type-bundler/commit/a8ca03354c555d7427c28104440889b7474b4168))
- add JSON schema ([a6b3987](https://github.com/favware/rollup-type-bundler/commit/a6b39874f760cf8b00027aed045a5d3da34f5fcd))
- add README ([ebbafdf](https://github.com/favware/rollup-type-bundler/commit/ebbafdf1811bce93bde765e85cc0fa1fcc18b573))
- add rollup bundling command step ([b40916d](https://github.com/favware/rollup-type-bundler/commit/b40916dbffb1a1bece6f47c5bb9aafa5d4788796))
- add specifying dist and buildScript ([c23325a](https://github.com/favware/rollup-type-bundler/commit/c23325a9e14773469a457e66c7d703146f5778a7))
- scaffold up repo ([6f579f0](https://github.com/favware/rollup-type-bundler/commit/6f579f0b8b16bc5958d83336d2662fe70d1d1940))

### Bug Fixes

- do not use cache for bundling types ([ef5c57b](https://github.com/favware/rollup-type-bundler/commit/ef5c57b0e63a146ad91b418a90eb4db5dd2aa1ad))
- exit on error of build and clean ([958cd5f](https://github.com/favware/rollup-type-bundler/commit/958cd5ffd5af7fdaccfb36a53adc604a2d28674a))
