#!/bin/sh

# --batch to prevent interactive command
# --yes to assume "yes" for questions
gpg --quiet --batch --yes --decrypt --passphrase="$GPG_PASSPHRASE" \
--output $GITHUB_WORKSPACE/.env.next .env.next.gpg 