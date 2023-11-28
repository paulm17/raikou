./buildServer.sh
./buildClient.sh
./buildOthers.sh

pnpm --filter @raikou/system run build
pnpm --filter @raikou/server run build
pnpm --filter @raikou/client run build