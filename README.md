# Personal Adblock List

A personal adblock rules list compatible with [AdGuard Home](https://adguard.com/en/adguard-home/overview.html), [Pi-hole](https://pi-hole.net/), and other tools that support the AdBlock filter syntax.

## Rules File

| File | Raw URL |
|------|---------|
| `rules.txt` | [https://adrules.msar.me/rules.txt](https://adrules.msar.me/rules.txt) |

## How to Use

### AdGuard Home

1. Open the AdGuard Home web UI.
2. Go to **Filters** → **DNS blocklists** → **Add blocklist** → **Add a custom list**.
3. Enter a name (e.g. *Personal Adblock List*) and paste the raw URL:
   ```
   https://adrules.msar.me/rules.txt
   ```
4. Click **Save**.

### Pi-hole

1. Open the Pi-hole admin panel.
2. Go to **Group Management** → **Adlists**.
3. Paste the raw URL into the **Address** field:
   ```
   https://adrules.msar.me/rules.txt
   ```
4. Click **Add** and then run **Tools** → **Update Gravity** to apply the list.

### uBlock Origin / AdGuard Browser Extension

1. Open the extension settings.
2. Go to **Filter lists** → **Custom** → **Import**.
3. Paste the raw URL:
   ```
   https://adrules.msar.me/rules.txt
   ```
4. Apply the changes.

## Rule Format

Rules follow the [AdBlock filter syntax](https://adguard.com/kb/general/ad-filtering/create-own-filters/), which is compatible with AdGuard Home, Pi-hole (via the built-in AdBlock parser), uBlock Origin, and AdGuard browser extensions.

```
! This is a comment
||example.com^          ! Block a domain and all its subdomains
@@||example.com^        ! Whitelist / unblock a domain
```

## License

[MIT](LICENSE)
