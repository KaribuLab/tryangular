npm_install(){
    npm install
    gulp
    sleep 10
    npm_install
}

minimize(){
    ERROR=0
    gulp dist || ERROR=1
    if [ "$ERROR" -eq "0" ]; then
        inotifywait -e create -e modify -e move -e delete -r /home/node/app/assets /home/node/app/modules /home/node/app/gulpfile.js /home/node/app/package.json /home/node/app/index.html
	    echo "================================="
	    echo "CAMBIO DETECTADO"
	    echo "================================="
	    sleep 3
    fi
	minimize
}


npm_install & minimize