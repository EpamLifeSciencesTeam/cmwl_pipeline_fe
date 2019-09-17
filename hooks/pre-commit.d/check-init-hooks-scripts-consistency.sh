#!/usr/bin/env bash

files=("hooks/install.sh" "hooks/install.bat")
changed=$(git diff --cached --name-only)

for file in "${files[@]}"; do
  if [[ ${changed} == *"${file}"* ]]; then
    error=$(tput setaf 1)
    normal=$(tput sgr0)
    message="${error}You have changed one of the files that supposed to work identically!${normal}: [ ${files[*]} ]"
    echo "${message}"
    exec < /dev/tty
    read -r -p "Are you sure you want to continue? [y/N]: " response
    response=${response,,}
    if [[ ${response} =~ ^(no|n) ]] || [[ -z ${response} ]]; then
      exit 1
    else
      exit 0
    fi
  fi
done

exit 0
