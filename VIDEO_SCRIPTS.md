# Video Scripts — Disease Pages

## Video kaha aayega (page pe exact position)

Har disease page pe video is order me dikhta hai (`app/[slug]/page.tsx`):

```
Conditions List → Pricing → Common Triggers chips → Common Symptoms chips
→ 🎥 VIDEO (yahan) → "Your Worries, Answered" table → FAQs
```

Yani video un patients ko dikhta hai jinhone already:
1. Apni condition symptoms padh li hai (matched)
2. Pricing dekh li hai (cost clear hai)
3. Apne triggers/symptoms chips me khud ko pehchaan liya hai ("ye toh mujhe hi ho raha hai")

Is exact moment pe video ka kaam hai: **trust confirm karna aur objection todna** — patient ka mann bann chuka hota hai, video use appointment tak le jaata hai. Isliye script me "kya condition hai" wapas mat samjhao (wo already upar padh chuka hai) — seedha doctor ki authority aur honest reassurance pe jao.

## Technical location

- Component: [components/shared/PageVideo.tsx](components/shared/PageVideo.tsx) — 1 video render karta hai (agar future me chahiye to `videos.map()` already multiple videos support karta hai)
- Data source: Supabase table `page_videos` — koi naya code nahi likhna, sirf row add karni hai (neeche exact steps)
- Renders nothing agar video nahi hai — safe hai, kabhi broken nahi dikhega

## Video add karne ka sabse aasan tarika (no coding needed)

1. Yeh link kholo: `https://supabase.com/dashboard/project/gicxbtupcxcterqeolij/editor`
2. Left sidebar me `page_videos` table par click karo
3. "Insert row" button dabao, ye 5 fields bharo:

| Field | Value | Example |
|---|---|---|
| `page_slug` | Exact page ka URL slug | `respiratory-diseases` |
| `youtube_id` | YouTube link ka last part (after `v=` ya `youtu.be/`) | `dQw4w9WgXcQ` |
| `title` | Video ka heading (page pe dikhega) | "Dr Anavil on Asthma & Allergies" |
| `caption` | 1-2 line description (SEO ke liye bhi useful) | Video ka summary |
| `is_active` | `true` | — |

4. Save karo — 60 second ke andar page pe video live ho jaayega (video kabhi bhi delete/edit kar sakte ho isi table se, koi deploy nahi chahiye)

**Important:** Video pehle **unlisted nahi, "Public" ya "Unlisted" — dono chalega**, par age-restricted ya private nahi honi chahiye warna embed fail hoga.

---

## Script Template (har page ke liye reusable structure)

```
[0:00–0:08] HOOK — condition ka naam bolo, ek line me validate karo unki situation
[0:08–0:25] AUTHORITY — "maine/humne itne saal me..." (real number, real experience)
[0:25–0:50] HONEST POSITIONING — kya realistic hai, kya nahi (over-promise mat karo)
[0:50–1:10] PROCESS — consultation me kya hota hai (case history, remedy selection)
[1:10–1:25] SAFETY LINE — "apni current medicine mat rokna" (jahan applicable)
[1:25–1:40] CTA — WhatsApp/appointment, warm tone, pressure nahi
```

`[PERSONALIZE: ...]` markers wahan hain jahan aapko apna real experience/number daalna hai — main guess nahi kar sakta, wahi authentic banata hai.

---

## Example 1 — Respiratory Diseases (Asthma/Allergy)

**Duration target: ~90 seconds. Camera: seedha lens me dekho, clinic setting.**

> Namaste. Main Dr Anavil Yadav — Yadav Homeo Clinic, Jaipur se.
>
> Agar aap yahan aaye hain kyunki aapko ya aapke bachche ko baar-baar asthma ka attack aata hai, ya saans lene me dikkat hoti hai dust ya cold air se — to main jaanta hoon ye kaisa lagta hai. Inhaler hamesha saath rakhna padta hai, aur wo bhi kaafi nahi lagta.
>
> [PERSONALIZE: Kitne saalon se asthma/respiratory cases treat kar rahe hain — exact number, e.g. "pichle X saalon me humne sainkdo asthma patients dekhe hain"]
>
> Main aapko clearly bataana chahta hoon — homeopathy aapka inhaler turant band nahi karwati. Wo galat hoga aur unsafe bhi. Jo hum karte hain wo hai — aapke asthma ki jo underlying sensitivity hai, jisse aap dust ya cold air se react karte ho — usko dheere-dheere kam karna. Jaise-jaise wo kam hoti hai, attacks kam hote hain, aur phir aapka doctor khud decide karta hai inhaler kam karna hai ya nahi.
>
> [PERSONALIZE: Ek genuine observation — e.g. "maine dekha hai ki jo patients 6 mahine treatment continue karte hain unme se zyada tar ko attacks kaafi kam mehsoos hote hain" — apne actual clinical experience ke hisaab se bolna, exact percentage mat bolna]
>
> Hamari consultation me hum aapki poori history samajhte hain — kab attack aata hai, kya trigger karta hai, kaunsi cheez se aaram milta hai. Usi se hum aapke liye sahi remedy choose karte hain.
>
> Aur ek baat clearly — apni current inhaler ya medicine kabhi mat rokna bina apne doctor se poochhe. Hum saath me kaam karte hain, alag se nahi.
>
> Agar aap apni ya apne bachche ki condition discuss karna chahte hain, neeche WhatsApp button hai — seedha humein message karo.

---

## Example 2 — Skin Diseases (Vitiligo/Psoriasis) — flagship page

> Namaste, main Dr Anavil Yadav.
>
> Vitiligo ya psoriasis ke saath sabse mushkil hissa sirf skin nahi hoti — log kaise dekhte hain, wo hota hai. Main samajhta hoon ye kitna mushkil hai.
>
> [PERSONALIZE: Real clinical observation number — e.g. "humare clinic me vitiligo ke liye jo bhi patient aate hain unme se..."]
>
> Main honest rahunga — vitiligo ka treatment slow hota hai, aur har patient alag tarike se respond karta hai. Koi bhi doctor agar aapko guarantee de raha hai wo sach nahi bol raha. Jo main keh sakta hoon — humne apne 30+ saal ke practice me consistent, genuine repigmentation dekhi hai jab treatment sahi tarike se, patience ke saath continue hota hai.
>
> [PERSONALIZE: Specific timeline jo aap dekhte ho apne practice me]
>
> Consultation me hum sirf patches nahi dekhte — poori body, family history, stress pattern, sab kuch samajhte hain. Kyunki sahi remedy insi se milti hai.
>
> Agar aap apni ya apne family member ki skin condition ke baare me baat karna chahte ho, WhatsApp pe message karo — main khud dekh kar bataunga ki aapke case me kya realistic hai.

---

## Notes for remaining 15 pages

Same template use karo, in cheezon ko har page ke hisaab se badlo:
- **Autism**: "cure nahi karta" line zaroor rakhna (page ka already established honest tone)
- **Cancer/Kidney/Heart**: sirf "supportive care" positioning — kabhi treatment/cure ka word mat bolna camera pe (compliance risk, jaisa audit report me bhi flag hua)
- **Mental Health**: privacy/confidentiality pe zor do, crisis helpline mention zaroor karo agar depression/anxiety pe bol rahe ho
- **Sexual Health/Men's Health**: tone extra respectful, "confidential" word bar bar use karo

Batao agar baaki 15 pages ke scripts bhi chahiye — main isi format me likh dunga, ek batch me.
