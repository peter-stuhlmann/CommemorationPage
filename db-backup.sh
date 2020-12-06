#!/bin/bash

routes=("cards" "choirs" "concerts" "cv" "discography" "memories" "orchestras" "pages" "pictures" "repertoire")

# colors
GREEN='\033[0;32m'
RED='\033[0;31m'
COLORRESET='\033[0m'

url=$(grep REACT_APP_API_URL .env | xargs)
url="${url##*'url='}"

date=$(date +%F)
time=$(date +%H-%M-%S)
directory=$(echo $date--$time)
backup="db-backup"

if [ ! -d $backup ]; then
    mkdir $backup
fi 

mkdir $backup/$directory

errorCounter=0

for ix in ${!routes[*]}
do 
    content=$(curl $url/${routes[$ix]}) 
    echo $content >$backup/$directory/${routes[$ix]}.json

    jsoncontent=$(<$backup/$directory/${routes[$ix]}.json)

    if [[ $jsoncontent == \[* ]]; then
        echo -ne "$(date +"%Y-%m-%d %T") Creating a backup of /${routes[$ix]} was successful.\n" >>$backup/$directory/backup.log
        echo -ne "${GREEN}Created json file for /${routes[$ix]}${COLORRESET}\n\n"
    else
        errorCounter=$[$errorCounter + 1]
        echo -ne "$(date +"%Y-%m-%d %T") ERROR Creating a backup of /${routes[$ix]} failed.\n" >>$backup/$directory/backup.log
        echo -ne "${RED}Error! JSON creation failed for /${routes[$ix]}${COLORRESET}${COLORRESET}\n\n"
    fi
done

if [ "$errorCounter" -gt "0" ]; then
    logfile=$backup/$directory/backup.log
    echo -ne "${GREEN}Backup completed with ${RED}$errorCounter errors!${COLORRESET} For details have a look at the log file: $logfile \n"
else
    echo -ne "${GREEN}Backup completed without errors!${COLORRESET}\n"
fi