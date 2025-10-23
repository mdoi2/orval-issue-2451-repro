# orval-issue-2451-repro

## Issue

https://github.com/orval-labs/orval/issues/2451

## Reproduction Procedure

### 1. Run Orval with Docker

```sh
docker-compose run --rm repro /bin/bash -c "cd /var/src/repro && npm i && npm exec orval"
```

### 2. Check the output file

The target file path is `./project/output/sample.ts`

The code with a missing line break will be output on the fourth line.

```ts
export const getSampleResponseNumMax = 100;export const getSampleResponseStrMin = 10;
```