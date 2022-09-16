VERSION="$1"
PREFIXED_VERSION="v$1"
NOTES="$2"
REPO_NAME="$3"

sed -i '' 's/\(^    s.version[^=]*= \).*/\1"'"$VERSION"'"/' $REPO_NAME.podspec 

#commit the version bump and updated docs
git add $REPO_NAME.podspec
git add CHANGELOG.md
git commit -m "chore(release): $VERSION [skip ci]

$NOTES"
