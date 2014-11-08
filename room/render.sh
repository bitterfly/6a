#!/bin/bash
if [[ -z "${1}" ]]; then
    echo "please specify start frame"
    exit 1
fi
if [[ -z "${2}" ]]; then
    echo "please specify end frame"
    exit 1
fi

mkdir -p rendered
blender -b --python drivers.py -y room.blend -o //rendered/ -s "${1}" -e "${2}" -a
