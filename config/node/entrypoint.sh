wait_changes(){
    npm install
    npm run gulp
    sleep 10
    wait_changes
}

wait_changes