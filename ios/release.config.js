module.exports = {
    branches: ["main"],
    tagFormat: "v${version}",
    plugins: [
      [
        "@semantic-release/commit-analyzer",
        {
          preset: "angular",
        },
      ],
      [
        "@semantic-release/release-notes-generator",
        {
          preset: "angular",
        },
      ],
      [
        "@semantic-release/changelog",
        {
          changelogFile: "CHANGELOG.md",
        },
      ],
      [
        "@semantic-release/exec",
        {
          prepareCmd: "sh ./release.sh ${nextRelease.version} \"${nextRelease.notes}\" REPO_NAME",
        },
      ],
      [
        "@semantic-release/git",
        {
          assets: [
            "REPO_NAME.podspec",
            "CHANGELOG.md",
          ],
          message:
            "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
        },
      ],
    ],
  };
