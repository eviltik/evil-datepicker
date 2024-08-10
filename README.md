# evil-datepicker


Code taken from https://github.com/sudobird/web-comp because of https://github.com/sudobird/web-comp/issues/1.

I just clean up the repo to get a single component, and add kind of locales support (en, fr, es, de)

Lit-element usage

```

[....]

onDateClick(ev) {
  console.log(ev)
}

render() {
 return html`
  <evil-datepicker
    range="true"
    locale="fr"
    position="manual"
    @date-click=${this.onDateClick}
  ></evil-datepicker>`;
}

```
