
set -e 

rm ROOT.war jetty-runner-8.1* example.war
cp ../build/libs/ROOT.war .
cp ../jetty-runner-8.1* .
cp ../examples/pojo-server/example.war .
docker build -f Dockerfile-servicebuilder -t predservicebuilder .
docker build -f Dockerfile-service -t predservice .

echo "to run:"
echo "docker run --rm -p 55000:55000 predservbuilder"
echo "docker run --rm -p 55001:55001 -v $PWD:/host predserv example.war"



