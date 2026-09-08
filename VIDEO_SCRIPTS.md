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

1. Yeh link kholo: `https://supabase.com/dashboard/project/chxikjhljmxegpbanmyc/editor` (naya Mumbai project — purana Tokyo wala link stale ho chuka tha, fix kar diya)
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

## Example 3 — Autoimmune Diseases (RA, Lupus, Hashimoto's)

> Namaste, main Dr Anavil Yadav — Yadav Homeo Clinic, Jaipur se.
>
> Agar aapko Rheumatoid Arthritis, Lupus, ya koi bhi autoimmune condition hai — to aap jaante honge ki ye sirf ek joint ya ek organ ki problem nahi hai. Poora immune system involved hota hai.
>
> [PERSONALIZE: Kitne saalon se autoimmune cases treat kar rahe hain, real number]
>
> Main clear rehna chahta hoon — hum aapki DMARDs, biologics, ya steroids kabhi rokne ko nahi bolte. Jo hum karte hain wo hai — poore immune system ki underlying dysregulation ko address karna, sirf inflammation ko nahi. Isse energy, sleep, aur overall wellbeing me bhi farak aata hai, sirf joint pain me nahi.
>
> [PERSONALIZE: Ek genuine observation apne RA/autoimmune patients ke baare mein]
>
> Hum aapke blood reports — CRP, ESR, antibodies — regularly track karte hain. Ye sirf feeling better ki baat nahi, numbers se bhi confirm hota hai.
>
> Apni current medicine kabhi mat rokna bina apne rheumatologist se poochhe — hum unke saath milkar kaam karte hain.
>
> Apni condition discuss karni hai to neeche WhatsApp karo.

---

## Example 4 — Cancer Supportive Care

**Note: Ye sabse zyada compliance-sensitive page hai (Schedule disease, Drugs & Magic Remedies Act). Video me kabhi "treat" ya "cure" ya koi bhi percentage/outcome number mat bolna — sirf supportive-care framing.**

> Namaste, main Dr Anavil Yadav.
>
> Main pehle hi clear kar dena chahta hoon — homeopathy cancer ka koi standalone treatment nahi hai, aur cancer ka ilaaj sirf qualified oncologist hi kar sakte hain. Chemotherapy, radiation, surgery — koi bhi cheez homeopathy se replace nahi honi chahiye.
>
> Jo hum offer karte hain wo hai supportive care — chemotherapy ke side effects jaise nausea, weakness, appetite loss me support karna, taaki patient apna poora treatment protocol behtar tarike se complete kar sake.
>
> [PERSONALIZE: Genuine observation, e.g. "humne dekha hai ki jo patients supportive homeopathic care lete hain unhe apna treatment cycle continue karne me aasani hoti hai" — koi specific % mat bolna]
>
> Hum hamesha aapke oncologist ke saath coordinate karte hain — unki treatment plan jaan kar hi hum apna supportive prescription decide karte hain.
>
> Agar aap ya aapka koi family member cancer treatment se guzar raha hai aur supportive care chahte hain, WhatsApp par baat karo.

---

## Example 5 — Renal Diseases (Kidney/Creatinine)

**Note: Kidney bhi Schedule disease hai. Specific creatinine numbers ya "X se Y ho gaya" jaisi baatein page pe likhi hui hain (patient testimonial ke through), lekin doctor khud camera pe apne mooh se specific outcome percentage mat bole.**

> Namaste, main Dr Anavil Yadav — Yadav Homeo Clinic, Jaipur se.
>
> Agar aapko ya aapke family member ko high creatinine ya kidney disease hai, aur dialysis ki baat ho rahi hai — main jaanta hoon ye kitna darawana lagta hai.
>
> [PERSONALIZE: Kitne saalon se kidney cases treat kar rahe hain]
>
> Main honest rahunga — har case alag hota hai. Kidney disease ke early stages me constitutional homeopathic treatment se genuinely acha response dekha hai humne, lekin advanced stages me hamara role sirf supportive hota hai. Hum aapko first consultation me hi honest assessment denge.
>
> Ek baat bahut zaroori — apni nephrologist ki medicine, diet restrictions, aur blood tests kabhi mat rokna. Hum har 6-8 hafte me aapke reports dekhte hain aur usi se treatment adjust karte hain.
>
> Agar aap apne reports discuss karna chahte ho, WhatsApp par bhejo — main dekh kar honest opinion dunga.

---

## Example 6 — Genetic Diseases (Down Syndrome, Thalassemia)

> Namaste, main Dr Anavil Yadav.
>
> Agar aapke bachche ko Down syndrome, thalassemia, ya koi genetic condition hai — main pehle hi clear kar dena chahta hoon: homeopathy DNA nahi badal sakti. Koi bhi is baat ka wada kare to sach nahi bol raha.
>
> Jo hum karte hain — bachche ki overall constitutional health improve karna. Immunity, digestion, sleep, aur development — inpe hum kaam karte hain, taaki bachcha jitna ho sake healthy aur engaged rahe.
>
> [PERSONALIZE: Genuine observation, e.g. "maine dekha hai ki jab bachche ki immunity better hoti hai, wo apni therapy se bhi zyada fayda utha paate hain"]
>
> Aapke bachche ki speech therapy, physiotherapy, ya jo bhi treatment chal rahi hai — wo continue rakhni hai. Hum uske saath milkar kaam karte hain.
>
> Apne bachche ke baare me baat karni hai to WhatsApp karo.

---

## Example 7 — Autism, ADHD, Developmental Delay

> Namaste, main Dr Anavil Yadav — Yadav Homeo Clinic, Jaipur se.
>
> Agar aap yahan hai kyunki aapke bachche ko autism ya developmental delay hai — main jaanta hoon aap kitne se guzar chuke ho. Diagnosis, therapists, raaton ki neend — sab kuch.
>
> Sabse pehle ek baat clearly — **homeopathy autism ko cure nahi karti**. Autism koi disease nahi hai jise khatam karna hai. Jo koi bhi cure ka wada kare, please uspar bharosa mat karo.
>
> [PERSONALIZE: Kitne saalon se, kitne bachche treat kiye hain — real number]
>
> Jo hum dekhte hain wo hai — sleep, digestion, hyperactivity, aur immune function me genuine improvement, jisse bachcha apni therapy se zyada fayda utha paata hai. Kuch bachchon me communication bhi improve hoti hai, lekin ye har case me guarantee nahi hai.
>
> Bachche ki speech therapy, OT, ABA — sab continue rakhni hai, hum unke saath complement karte hain, replace nahi.
>
> Apne bachche ke baare me baat karni hai to WhatsApp karo — hum poori family history se samajhte hain.

---

## Example 8 — Nervous System Diseases (Epilepsy, Migraine, Cerebral Palsy)

**Note: Epilepsy Schedule disease hai. AED reduction ka koi wada mat karna camera pe.**

> Namaste, main Dr Anavil Yadav.
>
> Epilepsy, migraine, ya cerebral palsy — ye sab nervous system ko affect karte hain, aur inka daily life pe bahut asar hota hai.
>
> [PERSONALIZE: Real experience number]
>
> Epilepsy ke liye — hum kabhi bhi aapki anti-epileptic medicine kam karne ko nahi kehte. Wo sirf aapka neurologist decide karta hai, EEG monitoring ke saath. Hum sirf underlying susceptibility pe kaam karte hain, jo alag se seizure control me support kar sakti hai.
>
> Migraine ke liye humara experience particularly acha raha hai — [PERSONALIZE: genuine observation, jaise "consistent treatment ke saath attacks ki frequency kam hote dekhi hai"].
>
> Apni current medicine kabhi mat rokna. Agar aap apna case discuss karna chahte ho, WhatsApp karo.

---

## Example 9 — Children's Health (Tonsillitis, Bed-Wetting, Allergies)

> Namaste, main Dr Anavil Yadav — Yadav Homeo Clinic, Jaipur se.
>
> Agar aapka bachcha baar-baar tonsillitis, bed-wetting, ya allergies se pareshaan hai — aur aap antibiotics ke cycle se thak chuke ho, main samajhta hoon.
>
> [PERSONALIZE: Kitne saalon se bachchon ka treatment kar rahe hain]
>
> Bachche adults se zyada tezi se respond karte hain constitutional treatment ko — unka immune system abhi develop ho raha hota hai. Recurrent tonsillitis ke liye humara experience particularly acha raha hai — surgery se pehle ek genuine try karne layak hai.
>
> Medicines chhoti, meethi, safe hoti hain — bachche khud le lete hain bina takleef ke.
>
> Apni current treatment continue rakhni hai. Apne bachche ke baare me baat karni hai to WhatsApp karo.

---

## Example 10 — Women's Health (PCOD, Fibroids, Menopause)

> Namaste, main Dr Anavil Yadav.
>
> PCOD, fibroids, irregular periods, ya menopause — ye sab hormones se juda hai, aur inka asar sirf physical nahi, emotional bhi hota hai.
>
> [PERSONALIZE: Real experience number, women's health cases]
>
> PCOD ke liye hum body ke apne hormonal axis ko restore karne pe kaam karte hain, sirf cycle regulate karne ke liye pills dene ke bajaye. Ye slow process hai — typically 12-18 mahine — lekin result lasting hota hai.
>
> Fibroids ke liye — early-stage, chhote fibroids me humara experience particularly acha raha hai, surgery avoid karne me.
>
> Apni current medicine ya contraceptive pill kabhi mat rokna bina poochhe. Sab kuch completely confidential rehta hai — apna case discuss karna hai to WhatsApp karo.

---

## Example 11 — Men's Health (Infertility, Prostate, ED)

> Namaste, main Dr Anavil Yadav — Yadav Homeo Clinic, Jaipur se.
>
> Male infertility, prostate issues, ya sexual health se juda koi bhi concern — main jaanta hoon ye baat karna kitna mushkil hota hai.
>
> Sabse pehle — ye sab genuine medical conditions hain, sharam ki baat nahi. Aur ye poori tarah confidential rehti hai — sirf aap aur main.
>
> [PERSONALIZE: Real experience, e.g. male infertility cases treat karne ka number]
>
> Male infertility ke liye hum sperm count sirf isolation me nahi dekhte — poori body ki hormonal health pe kaam karte hain. Progress semen analysis se objectively track hoti hai, har 3 mahine me.
>
> Online consultation available hai — poori tarah private, ghar se hi.
>
> Apni baat share karni hai to WhatsApp karo — koi judgment nahi hoga.

---

## Example 12 — Digestive Diseases (IBS, Colitis, Piles)

> Namaste, main Dr Anavil Yadav.
>
> IBS, colitis, ya piles — ye sab conditions daily life ko bahut affect karti hain, aur aksar patients "sab normal hai" sun kar frustrated hote hain jab reports normal aati hain lekin symptoms real hote hain.
>
> [PERSONALIZE: Real experience number, digestive cases]
>
> IBS particularly ek aisi condition hai jaha humara experience bahut consistent raha hai — kyunki homeopathy me hum sirf symptom nahi, poore person ko dekhte hain — stress pattern, food triggers, sab kuch.
>
> Piles aur fissures ke liye bhi — early-stage cases me surgery avoid karne me humara experience acha raha hai.
>
> Apni current PPI ya koi bhi medicine kabhi mat rokna achanak se. Apna case discuss karna hai to WhatsApp karo.

---

## Example 13 — Hormonal Diseases (Thyroid, Diabetes)

> Namaste, main Dr Anavil Yadav — Yadav Homeo Clinic, Jaipur se.
>
> Thyroid disease — especially Hashimoto's — aajkal bahut common ho gaya hai. Aur zyada tar log jo poochte hain wo hai: "kya main thyroxine kam kar sakta hoon?"
>
> [PERSONALIZE: Real experience number, thyroid cases]
>
> Honest answer — early Hashimoto's me, jaha gland abhi kaam kar raha hai, humne dose reduction dekha hai kuch patients me, endocrinologist ki supervision me. Long-standing hypothyroidism me expectations zyada modest rakhne chahiye.
>
> Diabetes ke liye hum kabhi standalone treatment nahi bolte — insulin ya metformin continue rehni chahiye, hum sirf supportive kaam karte hain.
>
> Apni medicine kabhi mat rokna bina apne doctor se poochhe. Apne reports discuss karne hai to WhatsApp karo.

---

## Example 14 — Mental Health (Anxiety, Depression, Insomnia)

**Note: Agar depression/anxiety pe specifically video bana rahe ho, script me crisis helpline (iCall: 9152987821) mention zaroor karna, jaisa page pe bhi hai.**

> Namaste, main Dr Anavil Yadav.
>
> Anxiety, depression, ya insomnia — ye sab genuine medical conditions hain, weakness nahi. Aur inka treatment side-effects ya dependency ke bina ho sakta hai.
>
> [PERSONALIZE: Real experience number, mental health cases]
>
> Anxiety humara sabse strong result-area raha hai — kyunki hum har person ki anxiety ko individually samajhte hain, generic treatment nahi dete.
>
> Agar aap already psychiatric medication pe ho, use kabhi mat rokna bina apne psychiatrist se poochhe. Hum saath me kaam karte hain.
>
> Ye conversation poori tarah confidential hai. Agar aap ya koi jaan-pehchaan wala crisis me hai, please turant professional help lo ya iCall 9152987821 pe call karo — ye emergency service nahi hai.
>
> Apni baat share karni hai to WhatsApp karo.

---

## Example 15 — Joint & Bone Diseases (RA, Slipped Disc, Ankylosing Spondylitis)

> Namaste, main Dr Anavil Yadav — Yadav Homeo Clinic, Jaipur se.
>
> Joint pain, arthritis, ya spine problems — zyada tar sirf do options milte hain: painkillers ya surgery. Hum ek teesra raasta offer karte hain.
>
> [PERSONALIZE: Real experience number, joint/spine cases]
>
> Rheumatoid Arthritis aur cervical spondylosis me humara experience particularly acha raha hai. Slipped disc ke early-grade cases me bhi conservative treatment ek genuine option hai, physiotherapy ke saath.
>
> Osteoarthritis me hum honest rehte hain — pain relief aur mobility improve hoti hai, lekin joint changes ko poori tarah reverse karna realistic nahi hai.
>
> Apni painkiller kabhi mat rokna achanak se. Apna MRI/X-ray discuss karna hai to WhatsApp karo.

---

## Example 16 — Heart & Cardiac Support

**Note: Heart disease bhi Schedule disease hai. Kabhi "cure" ya "close ASD/VSD" jaisa wada mat karna camera pe — sirf supportive/quality-of-life framing.**

> Namaste, main Dr Anavil Yadav.
>
> ASD, VSD, hypertension, ya koi bhi heart condition — main pehle hi clear kar dena chahta hoon: hum cardiac conditions cure nahi karte. Ye sirf aapke cardiologist ka kaam hai.
>
> Jo hum offer karte hain — supportive care. Quality of life improve karna, symptoms manage karna, aapke existing cardiac treatment ke saath, kabhi uski jagah nahi.
>
> [PERSONALIZE: Genuine observation, e.g. "hum families ke saath unke cardiologist ki poori jaankari lekar hi kaam shuru karte hain"]
>
> Apni heart ki koi bhi medicine kabhi mat rokna — ye bahut zaroori hai. Hum hamesha aapke cardiologist ko informed rakhne ko kehte hain.
>
> Agar aap supportive care discuss karna chahte ho, WhatsApp karo.

---

## Example 17 — Sexual Health (Confidential)

> Namaste, main Dr Anavil Yadav — Yadav Homeo Clinic, Jaipur se.
>
> Sexual health se juda koi bhi concern — loss of libido, recurring infections — main jaanta hoon ye baat karna sabse mushkil hoti hai.
>
> Ye page unhi logon ke liye hai jo abhi tak kisi se ye baat share nahi kar paaye. Sab kuch yaha completely confidential hai — sirf aap aur main.
>
> [PERSONALIZE: Genuine, respectful observation]
>
> Bacterial infections jaise gonorrhea, chlamydia — inke liye antibiotics zaroori hain, hum kabhi unse mana nahi karte. Genital herpes jaise conditions me hamara focus recurrence kam karne pe hota hai.
>
> Online consultation ideal hai is tarah ke concerns ke liye — poori privacy ke saath, apne phone se.
>
> Jab bhi aap ready ho, WhatsApp karo — koi judgment nahi milega.

---

## Summary — Sab 17 Pages Ke Scripts Ready Hain

| # | Page | Script Location |
|---|---|---|
| 1 | skin-diseases | Example 2 |
| 2 | autoimmune-diseases | Example 3 |
| 3 | cancer | Example 4 |
| 4 | renal-diseases | Example 5 |
| 5 | genetic-diseases | Example 6 |
| 6 | autism | Example 7 |
| 7 | nervous-system-disease | Example 8 |
| 8 | childrens-health | Example 9 |
| 9 | womens-health | Example 10 |
| 10 | mens-health | Example 11 |
| 11 | respiratory-diseases | Example 1 |
| 12 | digestive-diseases | Example 12 |
| 13 | hormonal-diseases | Example 13 |
| 14 | mental-health | Example 14 |
| 15 | joint-bone-diseases | Example 15 |
| 16 | heart-cardiac-support | Example 16 |
| 17 | sexual-health | Example 17 |

Har `[PERSONALIZE: ...]` slot me apna real number/observation daal kar hi record karna — jo bhi wahan likha hai wo sirf guidance hai, fact nahi.
