Commando – Hugo theme for Commando UX

> Generate accessibility audit reports and much more

## Usage (as a module)

Follow official instructions for using a theme as a module :  
https://gohugo.io/hugo-modules/use-modules/#use-a-module-for-a-theme

1. Initialize the hugo module system:  
`$ hugo mod init github.com/<your_user>/<your_project>`.  
Example: let's say you have created a repository on Gitlab named `commando` within  a sub-folder named `dinum`. You can set your module path to `gitlab.com/goodimpact/dinum/commando`:  
```shell
hugo mod init gitlab.com/goodimpact/dinum/commando
```

2. Import the theme in your `config.toml`:
```toml
[module]
  [[module.imports]]
    path = "gitlab.com/bertrandkeller/commando-hugo-template"
		# theme
```

3. All good.
  - for dev mode, run `hugo server`. Modules should be automatically fetched
  - to update theme, run: `hugo mod get -u gitlab.com/bertrandkeller/commando-hugo-template`

## Make an test changes in the theme

One way to do local development of a module imported in a project is to add a replace directive to a local directory with the source in `go.mod`:
```go
replace gitlab.com/bertrandkeller/commando-hugo-template => ~/workspace/dinum/commando-hugo-template
```

CAUTION: **Caution:**
If you meet difficulties to connect to this private repository on Gitlab, it's probably because `go get`uses HTTPS. You can find instructions on how to:
- either authenticate over HTTPS
- or use SSH in place of HTTPS

More information here : https://golang.org/doc/faq#git_https

The 2 second (using SSH instead of HTTPS) option has been tested with success by adding these lines to `~/.gitconfg`:
```git
[url "ssh://git@gitlab.com/"]
	insteadOf = https://gitlab.com/
```