/**
 * AStudios - Unified Player Application
 * Combines all JavaScript logic from index, now-playing, tracks, and playlists pages
 */

// ============================================================
// GLOBAL DATA
// ============================================================

const songs = [
  {
    title: "Waifus",
    genre: "J-Pop Trap",
    file: "music/RomCom-Waifus.mp3",
    cover: "images/Waifus.png",
    artist: "AStudios",
    durationLabel: "3:07",
    release: "2026",
    addedOrder: 1,
    lyricsData: `00:00:00,100 --> 00:00:07,320 [Male]
[singing] Yeah. Ah. Koi no hadou.

00:00:07,920 --> 00:00:09,840 [Female]
Miku, Marin, Chinatsu, Alya.

00:00:10,480 --> 00:00:27,500 [Male]
I walk in, gold chain cold (yeah), heart on tilt, but my face stay calm (woo).
Miku got the room in a soft pink glow. Marin make my bad thoughts wanna dance along (wee).
Chinatsu got that disciplined smile. Alya hit me once, I forgot my name. I'm too deep in a romcom frame. 
Every look got my whole chest flame

00:00:27,560 --> 00:00:29,000 [Female]
Do you want me close?

00:00:29,330 --> 00:00:38,200 [Male]
Yeah, baby, say it slow. I keep one eye on the prize, one hand on the phone. My boys know the code.
When the screen lights up, I go dumb. She said, "omae, baka," now my pulse go up.

00:00:38,340 --> 00:00:42,920 [Female]
Sugoi, that's trouble. Kyun, that's pain. Too much cute in the air, I can't behave.

00:00:42,980 --> 00:00:55,280 [Male]
One more smile, then I'm gone, gone, gone. Hold that gaze, make the whole night long.
We all need romcom waifus. We all need romcom waifus.

00:00:55,420 --> 00:01:01,940 [Female]
Koi ni ochiru. We all need romcom waifus. We all need romcom waifus.

00:01:02,200 --> 00:01:35,240 [Male]
Doki-doki, I'm through. We all need romcom waifus. Miku in the headset, sweet like a hook
Marin with the tease, got me reading her looks
Chinatsu on the grind, she a class act queen
Alya talk mean, but she know what I mean
I'm in the lane where the blush stays hot
Where the shy girl wins and the cool girl pops
Every episode hit like a drumline snap
One little "hey" and I don't come back
"Watashi dake miru?"
Girl, say that again
I'm caught in the spell
And I'm loving the bend
From the schoolyard laugh
To the rooftop run
I want all four names
On my tongue like a son

00:01:35,400 --> 00:01:39,920 [Female]
Sugoi, that's trouble. Kyun, that's flame. Too much heart in the air, I can't explain.

00:01:40,020 --> 00:01:51,940 [Male]
One more wink, then I'm lost, lost, lost. Hold that line, let the whole world watch.
We all need romcom waifus. We all need romcom waifus.

00:01:52,480 --> 00:01:59,240 [Female]
Koi ni ochiru. We all need romcom waifus. We all need romcom waifus.

00:01:59,270 --> 00:02:13,829 [Male]
Doki-doki, I'm through. We all need romcom waifus.

00:02:13,840 --> 00:02:23,020 [Female]
Maji de, this love got teeth. Sweet on top, then it bites beneath. She lean in close, say,
"Daisuki." My whole chest say, "Shikata nai."

00:02:23,360 --> 00:02:36,700 [Male]
Miku, Marin, Chinatsu, Alya. Four bright sparks in my fever dream. If I wake up now, I lose
that scene. So I stay in the frame, let the whole thing gleam. We all need romcom waifus.

00:02:38,400 --> 00:02:49,100 [Female]
We all need romcom waifus. Koi ni ochiru. We all need romcom waifus. We all need romcom waifus.

00:02:49,160 --> 00:03:07,280 [Male]
Doki-doki, I'm through. We all need romcom waifus. We all need romcom waifus.
We all need romcom waifus.`,
  },
  {
    title: "PaperFlowerGate",
    genre: "J-Pop Ballad",
    file: "music/PaperFlowerGate.mp3",
    cover: "images/PFG.png",
    artist: "AStudios",
    durationLabel: "4:31",
    release: "2025",
    addedOrder: 2,
    lyricsData: `00:00:00,580 --> 00:00:08,360 [Music]
[Music] 

00:00:11,390 --> 00:00:13,360 [Female]
You stood by the wall, 

00:00:14,400 --> 00:00:28,000 [Female]
hands in your pockets. Big jacket, quiet eyes. They said your name like trouble, but I saw your heart hidden under it. 

00:00:29,240 --> 00:00:30,120 [Female]
Oh. 

00:00:31,340 --> 00:00:39,280 [Male]
I wore my rhythm neat. You looked away at first, then bowed so carefully. 

00:00:40,580 --> 00:00:47,900 [Male]
Like you knew my world. Different shoes, same floor, same shy heartbeat. 

00:00:51,320 --> 00:01:01,700 [Female]
And every step between us felt like a locked gate. But your voice was warm, soft as spring in the cracks. 

00:01:03,200 --> 00:01:07,180 [Female]
I reached through the silence. You 

00:01:08,480 --> 00:01:10,020 [Female]
reached back. 

00:01:14,060 --> 00:01:19,680 [Female]
Rintaro, don't go. Stay a little longer. 

00:01:19,680 --> 00:01:22,580 [Male]
Haruko, look up. 

00:01:22,580 --> 00:01:31,040 [Female]
I'm not what they told you. Rintaro, come close. Let the wall fall over. 

00:01:31,040 --> 00:01:33,860 [Male]
Haruko, bloom slow. 

00:01:33,860 --> 00:01:38,380 [Female]
Bloom where they can't hold you. 

00:01:41,280 --> 00:01:44,020 [Female]
Hold you. Hold you. 

00:01:46,120 --> 00:01:48,640 [Female]
Bloom with me. 

00:01:51,480 --> 00:01:57,060 [Female]
[humming] 

00:01:58,860 --> 00:02:06,660 [Male]
Your school's bright crest, my school's black and white. Two worlds on the hill, 

00:02:07,920 --> 00:02:15,300 [Male]
with our names between them. But you gave me courage without asking why. 

00:02:18,880 --> 00:02:29,400 [Female]
And when the rumors rose like winter in the halls, you stood steady, calm like a candle in wind. 

00:02:30,720 --> 00:02:39,040 [Female]
I learned your kindness is stronger than pride. 

00:02:41,600 --> 00:02:47,280 [Female]
Rintaro, don't go. Stay a little longer. 

00:02:47,280 --> 00:02:50,100 [Male]
Haruko, look up. 

00:02:50,100 --> 00:02:58,579 [Female]
I'm not what they told you. Rintaro, come close. Let the wall fall over. 

00:02:58,580 --> 00:03:01,340 [Male]
Haruko, bloom slow. 

00:03:01,340 --> 00:03:04,880 [Female]
Bloom where they can't hold you. 

00:03:05,960 --> 00:03:07,160 [Female]
Hold you. 

00:03:08,780 --> 00:03:11,600 [Female]
Hold you. 

00:03:13,340 --> 00:03:15,940 [Female]
Bloom with me. 

00:03:17,260 --> 00:03:27,120 [Female]
Long waves under our feet. The whole world tilts and fades. Then higher, higher. 

00:03:28,560 --> 00:03:38,060 [Female]
A silver sound rises like petals in the air. Like we finally believe. 

00:03:38,060 --> 00:03:40,800 [Male]
Rintaro, don't go. 

00:03:40,800 --> 00:03:43,780 [Female]
Stay a little longer. 

00:03:43,780 --> 00:03:46,600 [Male]
Haruko, look up. 

00:03:46,600 --> 00:03:49,360 [Female]
I'm not what they told you. 

00:03:49,360 --> 00:03:52,220 [Male]
Rintaro, come close. 

00:03:52,220 --> 00:03:54,980 [Female]
Let the wall fall over. 

00:03:54,980 --> 00:03:57,860 [Male]
Haruko, bloom slow. 

00:03:57,860 --> 00:04:03,660 [Female]
Bloom where they can't hold you. Hold you. Hold you. 

00:04:09,800 --> 00:04:13,000 [Female]
Bloom with me. 

00:04:16,540 --> 00:04:19,990 [Female]
[humming] 

00:04:22,220 --> 00:04:24,740 [Female]
Bloom with me.`,
  },
  {
    title: "ShuttleAndHoop",
    genre: "J-Pop Swing",
    file: "music/ShuttleAndHoop.mp3",
    cover: "images/SaH.png",
    artist: "AStudios",
    durationLabel: "5:54",
    release: "2026",
    addedOrder: 3,
    lyricsData: `00:00:00,320 --> 00:00:11,660 [Music]
[music] 

00:00:14,100 --> 00:00:20,280 [Male]
Taichi ties his shoes before the gym bell rings. 

00:00:21,600 --> 00:00:27,300 [Male]
Same old wooden floor, same old careful swings. 

00:00:28,540 --> 00:00:34,220 [Male]
He counts the empty shuttles one by one by one. 

00:00:35,860 --> 00:00:40,600 [Male]
Quiet in the corner, but he never runs. 

00:00:42,560 --> 00:00:48,640 [Male]
Chinatsu to the court, sweat on her wristband line. 

00:00:49,860 --> 00:00:55,880 [Male]
She lifts with steady breath like she's racing time. 

00:00:56,940 --> 00:01:09,200 [Male]
He sees her through the door just passing with her team, and his heart gets shaky, though his hands stay mean. 

00:01:10,320 --> 00:01:36,960 [Female]
He wants the next shot. He wants it clean. One more inch, one more dream. She says, "Don't stop now" from somewhere in between, and suddenly the air feels green. Taichi, keep going. Taichi, keep going one more step. 

00:01:38,800 --> 00:01:40,280 [Female]
Don't let go. 

00:01:42,740 --> 00:02:09,160 [Female]
Chinatsu, you're glowing. Chinatsu, you're glowing. Two hard roads, same warm soul. When the bass falls low, and the skies come up high. He's chasing the bird. She's chasing the sky. 

00:02:11,140 --> 00:02:11,980 [Female]
Taichi, 

00:02:13,000 --> 00:02:25,600 [Female]
keep going. Chinatsu, you're glowing. Love and a dream in the same long line. 

00:02:29,460 --> 00:03:23,560 [Female]
After practice haul, he watches her leave first. Basketball in her grip like a secret thirst. He wants to say her name, but the words get small. So he leaves a note on the locker wall. Not a grand speech, just honest lines. "I'll get better too if you'll keep shining." She turns and smiles like she already knew, and his whole chest blooms through and through. Taichi, keep going. Taichi, keep going one more step. 

00:03:25,420 --> 00:03:28,000 [Female]
Don't let go. 

00:03:29,320 --> 00:03:55,320 [Female]
Chinatsu, you're glowing. Chinatsu, you're glowing. Two hard roads, same warm soul. When the bass falls low, and the stars come up high. He's chasing the bird. She's chasing the sky. 

00:03:57,740 --> 00:04:11,220 [Female]
Taichi, keep going. Chinatsu, you're glowing. Love and a dream in the same long line. 

00:04:12,440 --> 00:04:23,960 [Female]
Some days the net looks high, some days the hoop looks far. Still they pick up each hurt and wear each scar. 

00:04:26,040 --> 00:04:35,300 [Female]
If I can reach you, if you can reach me too, maybe winning is what we do. 

00:04:40,360 --> 00:04:44,740 [Female]
Taichi, keep going. Taichi, 

00:04:45,780 --> 00:04:48,780 [Female]
keep going one more step. 

00:04:50,660 --> 00:04:52,520 [Female]
Don't let go. 

00:04:54,540 --> 00:05:21,040 [Female]
Chinatsu, you're glowing. Chinatsu, you're glowing. Two hard roads, same warm soul. When the bass falls low, and the sky breaks bright. He finds his rhythm. She finds her light. Taichi, keep going. 

00:05:23,020 --> 00:05:30,980 [Female]
Chinatsu, you're glowing. Dreams and love 

00:05:32,300 --> 00:05:36,580 [Female]
in the same long line. 

00:05:38,440 --> 00:05:53,240 [Music]
[outro music]`,
  },
  {
    title: "Third Quince",
    genre: "J-Pop Ballad",
    file: "music/ThirdQuince.mp3",
    cover: "images/TQ.png",
    artist: "AStudios",
    durationLabel: "5:51",
    release: "2026",
    addedOrder: 4,
    lyricsData: `00:00:00,580 --> 00:00:11,080 [Music]
[Intro Music] 

00:00:13,180 --> 00:00:14,920 [Female]
You were the first 

00:00:16,320 --> 00:00:18,060 [Female]
to say my name. 

00:00:19,740 --> 00:00:25,010 [Female]
Soft as snow, but it still burned the same. 

00:00:26,580 --> 00:00:56,620 [Male]
Ishika smiled too smooth, changed the truth in her mouth. A sweet little lie with the backdoor left out. Nino slammed every door, then she turned, then she cared. Love that bites first still wants someone there. Itsuki stayed far away with her pride and a wall. Yotsuba gave every last piece and said nothing at all. Me, I stayed in one place, same hand, same ache, same light. I loved him out loud and I loved him right. 

00:00:56,620 --> 00:00:58,060 [Female]
I was there first. 

00:00:59,460 --> 00:01:01,780 [Female]
I stayed the same 

00:01:02,960 --> 00:01:11,720 [Female]
while they all moved, and I kept his name. Miku, don’t fade out. 

00:01:12,780 --> 00:01:15,180 [Female]
Miku, don’t fade out. 

00:01:16,340 --> 00:01:31,360 [Female]
I loved him first, and I loved him loud. I gave him my heart, he let it drop down. Miku, don’t fade out. Don’t fade out now. 

00:01:31,360 --> 00:01:33,580 [Male]
I watched you all change. 

00:01:34,720 --> 00:01:43,540 [Male]
I watched him look away. I said it with my whole chest, still lost him anyway. 

00:01:44,800 --> 00:01:48,200 [Male]
Miku, don’t fade out. 

00:01:52,740 --> 00:01:55,200 [Male]
Miku, don’t fade out. 

00:01:56,780 --> 00:02:23,740 [Male]
I begged the words I couldn’t say in a room full of steam. Every small brave step was a fire in me. I learned his world one page, one word, one glance. While the rest were dreams, I was the one who would stand. But love ain’t fair, and it doesn’t keep score. You can give all you are and still want more. So I bit back tears and I stayed in the frame. The first one to open up, the last one he named. 

00:02:23,740 --> 00:02:41,920 [Female]
I was there first. I stayed the same while they all moved, and I kept his name. Miku, don’t fade out. Miku, don’t fade out. 

00:02:42,980 --> 00:02:56,900 [Female]
I loved him first, and I loved him loud. I gave him my heart, he let it drop down. Miku, don’t fade out. Don’t fade out now. 

00:02:57,980 --> 00:03:00,220 [Male]
I watched you all change. 

00:03:01,360 --> 00:03:10,320 [Male]
I watched him look away. I said it with my whole chest, still lost him anyway. 

00:03:11,500 --> 00:03:12,140 [Male]
Miku, 

00:03:13,220 --> 00:03:22,480 [Male]
don’t fade out. Miku, don’t fade out. 

00:03:36,540 --> 00:03:37,860 [Female]
Look at the screen, 

00:03:39,400 --> 00:03:40,940 [Female]
say it back to me. 

00:03:42,820 --> 00:03:48,340 [Female]
I was never a maybe, I was always real, you see. 

00:03:49,640 --> 00:03:51,600 [Male]
I didn’t play games, 

00:03:52,700 --> 00:03:54,680 [Male]
I didn’t hide in the dark. 

00:03:56,340 --> 00:04:01,200 [Male]
I walked in first with my whole shaking heart. 

00:04:02,960 --> 00:04:04,420 [Male]
And yeah, it hurts 

00:04:05,500 --> 00:04:18,160 [Male]
that honesty bled. But I’d rather be true than be the one he forgets. So if I lose here, let the record stay. I loved him first, I loved him all the way. 

00:04:29,420 --> 00:04:51,340 [Female]
Miku, don’t fade out. Miku, don’t fade out. I loved him first, and I loved him loud. I gave him my heart, he let it drop down. Miku, don’t fade out. Don’t fade out now. 

00:04:51,340 --> 00:05:03,580 [Male]
I watched you all change. I watched him look away. I said it with my whole chest, still lost him anyway. 

00:05:04,840 --> 00:05:09,900 [Male]
Miku, don’t fade out. 

00:05:12,560 --> 00:05:22,680 [Male]
Miku, don’t fade out. Miku, don’t fade out. 

00:05:26,060 --> 00:05:29,200 [Male]
Miku, don’t fade out now. 

00:05:31,159 --> 00:05:49,480 [Music]
[outro music]`,
  },
  {
    title: "You See Me",
    genre: "Jap-Eng Trap Rap",
    file: "music/YouSeeMe.mp3",
    cover: "images/YSM.png",
    artist: "AStudios",
    durationLabel: "3:41",
    release: "2026",
    addedOrder: 5,
    lyricsData: ` 00:00:00,200 --> 00:00:21,660 [Male]
I came in locked up tight
Face on, game on, cold enough
Everybody wants a mask
So I made mine fit like gloves. 

00:00:21,660 --> 00:00:28,540 [Male]
School hall, locked jaw, same old scene
Pocket full of words I never spend
You looked through me like glass
Then you smiled and I almost bent. 

00:00:28,540 --> 00:00:35,340 [Male]
No big talk, no fake cool
Just that look like, “I know you”
気づかれたくない
でも君だけは true. 

00:00:35,340 --> 00:00:42,420 [Male]
Walls go up, walls go down
When you say my name like that
숨겨 둔 마음까지
Break apart, then come right back. 

00:00:42,420 --> 00:00:50,120 [Male]
One step close, no crowd around
Suddenly it’s safe somehow
本当の顔で
I can breathe right now. 

00:00:50,120 --> 00:01:04,040 [Male]
You see me, I see you
初めての feeling
You see me, I see you
心がもう free-ing. 

00:01:04,040 --> 00:01:17,160 [Male]
No more armor, no more fear
君の前で only me
You see me, I see you
That’s where I wanna be (yeah, yeah).

00:01:18,420 --> 00:01:25,240 [Male]
I used to talk in half-truths
Keep my real laugh in a drawer
Act like I don’t need nobody
Then you came and kicked that door. 

00:01:25,240 --> 00:01:32,100 [Male]
Now I’m honest in small ways
Messy hair, tired eyes, real grin
You don’t need the polished version
You like the crack, you like the skin. 

00:01:32,100 --> 00:01:38,880 [Male]
周りには見せない
この弱さも shine
If they knew what you knew
They’d know I’m doing fine. 

00:01:38,880 --> 00:01:45,940 [Male]
You don’t flinch, you don’t run
When the night gets loud inside
You just pull me back to earth
Like, “Relax, you’re alive.”

00:01:45,940 --> 00:01:53,020 [Male]
Walls go up, walls go down
When you say my name like that
숨겨 둔 마음까지
Break apart, then come right back. 

00:01:53,020 --> 00:02:00,720 [Male]
One step close, no crowd around
Suddenly it’s safe somehow
本当の顔で
I can breathe right now. 

00:02:00,720 --> 00:02:14,600 [Male]
You see me, I see you
初めての feeling
You see me, I see you
心がもう free-ing. 

00:02:14,600 --> 00:02:28,079 [Male]
No more armor, no more fear
君の前で only me
You see me, I see you
That’s where I wanna be (yeah, yeah). 

00:02:28,080 --> 00:02:35,420 [Male]
Hands up now, let it break
All that pride, let it shake
If they want the fake me, let them wait
I got the real one right here today. 

00:02:35,420 --> 00:02:42,399 [Male]
ねえ、こんなに自然で
Crazy how it feels
Two lost kids turned one light
Now we turn the room real bright. 

00:02:42,400 --> 00:02:50,140 [Male]
Move closer, don’t blink
This is more than a spark
Everybody else can watch
We already found the heart. 

00:02:50,140 --> 00:02:50,200 [Male]
You see me, I see you
初めての feeling
You see me, I see you
心がもう free-ing. 

00:03:04,040 --> 00:03:17,700 [Male]
No more armor, no more fear
君の前で only me
You see me, I see you
That’s where I wanna be (yeah, yeah). 

00:03:17,700 --> 00:03:25,440 [Male]
Quiet now, but it’s loud in my chest
君となら I’m blessed
No disguise, no test
Just you and me, I guess. 

00:03:25,440 --> 00:03:41,400 [Male]
You see me
I see you
初めての feeling
And it’s true
    `,
  },
  {
    title: "2Dの世界へ",
    genre: "Jap-Eng Trap Rap",
    file: "music/2DnoSekaihe.mp3",
    cover: "images/2D.png",
    artist: "AStudios",
    durationLabel: "4:00",
    release: "2026",
    addedOrder: 6,
    lyricsData: ` 00:00:07,560 --> 00:00:13,030 [Male]
朝のアスファルト
でも頭は別の world
教室の窓の外
I’m already gone, I’m in the swirl

00:00:13,030 --> 00:00:22,380 [Male]
財布は薄い
夢はでかい, that’s the code
誰にも見えない扉
俺だけが知ってるロード

00:00:22,380 --> 00:00:29,540 [Male]
息を止めて jump in
ネクタイほどいて run
現実は重いけど
画面の向こうで I'm the one

00:00:29,540 --> 00:00:37,020 [Male]
目が合った瞬間
2Dの girl, she smiles at me
綺麗すぎる世界
それだけで救われる feelin’ free

00:00:37,020 --> 00:00:44,300 [Male]
もう少し, hold on
心が浮かぶ方へ
痛みもノイズも
遠くへ, far away

00:00:44,300 --> 00:00:51,560 [Male]
ほら, hear that? 心拍が上がる
一歩で変わる tonight
I’m not lost, I’m alive
この瞬間で飛べる vibe

00:00:51,560 --> 00:00:59,280 [Male]
2Dの世界へ
Take me there, take me there
2Dの世界へ
I can breathe, I can care

00:00:59,280 --> 00:01:06,540 [Male]
higher now
Bass falls, then I rise
2Dの世界へ
ここが俺の sky

00:01:06,540 --> 00:01:13,960 [Male]
2Dの世界へ
Take me there, take me there
2Dの世界へ
I can breathe, I can care

00:01:13,960 --> 00:01:21,100 [Male]
ポケットの中の pain
Still I move like I’m blessed
昨日のミスも傷も
今日の俺には just a test

00:01:21,100 --> 00:01:28,060 [Male]
踏まれたプライド
でも折れてない spine
夜のコンビニ前
また描く new design

00:01:28,060 --> 00:01:36,339 [Male]
「無理だ」って言葉
聞き飽きたよ, no more
俺は俺の速度で
開けるんだ next door

00:01:36,340 --> 00:01:42,520 [Male]
アニメの街角
雨が光って見える
あの子の小さな笑顔で
世界は少し救われる

00:01:43,720 --> 00:01:50,880 [Male]
現実が嫌いじゃない
ただ少し疲れたんだ
でもあの色の向こう
まだ行ける,まだ飛べるんだ

00:01:50,880 --> 00:01:58,240 [Male]
もう少し, hold on
心が浮かぶ方へ
痛みもノイズも
遠くへ, far away

00:01:58,240 --> 00:02:05,170 [Male]
ほら, hear that? 心拍が上がる
一歩で変わる tonight
I’m not lost, I’m alive
この瞬間で飛べる vibe

00:02:05,170 --> 00:02:13,260 [Male]
2Dの世界へ
Take me there, take me there
2Dの世界へ
I can breathe, I can care

00:02:13,260 --> 00:02:20,180 [Male]
高く跳べ, higher now
Bass falls, then I rise
2Dの世界へ
ここが俺の sky

00:02:20,180 --> 00:02:27,780 [Male]
2Dの世界へ
Take me there, take me there
2Dの世界へ
I can breathe, I can care

00:02:27,780 --> 00:02:34,960 [Male]
目を閉じる
見える未来
泣きそうでも
まだ行ける right?

00:02:34,960 --> 00:02:42,560 [Male]
I was built for the fall
でも立ち上がる every time
二次元の光が
この胸に fireline

00:02:42,560 --> 00:02:49,920 [Male]
Listen to my heart, no fear
今日の俺は stronger
ひとりじゃない気がする
その瞬間, I'm a runner

00:02:51,740 --> 00:02:57,320 [Male]
Bass drop!
Ah, ah
ふわりと
跳ねる light

00:02:57,320 --> 00:03:04,740 [Male]
2Dの世界へ
Take me there, take me there
2Dの世界へ
I can breathe, I can care

00:03:04,740 --> 00:03:11,920 [Male]
高く跳べ, higher now
Bass falls, then I rise
2Dの世界へ
ここが俺の sky

00:03:11,920 --> 00:03:19,329 [Male]
2Dの世界へ
Take me there, take me there
2Dの世界へ
I can breathe, I can care

00:03:20,680 --> 00:03:29,260 [Male]
現実の向こうで
また会おう, I know
2Dの世界へ
俺は自由でいくよ

00:03:31,020 --> 00:03:41,579 [Male]
2Dの世界へ
Take me there, take me there
2Dの世界へ
I’m alive, I’m alive
    `,
  },
];

let playlists = [{ title: "Anime", songIndices: [0, 1, 2, 3] }];

const discoverItems = [
  { title: "PaperFlowerGate", genre: "J-Pop Ballad", cover: "images/PFG.png" },
  { title: "ShuttleAndHoop", genre: "J-Pop Swing", cover: "images/SaH.png" },
  { title: "ThirdQuince", genre: "J-Pop Ballad", cover: "images/TQ.png" },
];

const notifications = [
  {
    title: "Queue updated",
    body: "Track 2 was moved closer to the top of your listening queue.",
    time: "Just now",
  },
  {
    title: "Saved session restored",
    body: "Nightwave reopened your previous track and playback position.",
    time: "12 min ago",
  },
  {
    title: "Playlist suggestion",
    body: "Your recent ambient tracks fit well in an After Hours collection.",
    time: "Today",
  },
];

// ============================================================
// STORAGE KEYS
// ============================================================
const STORAGE_KEY = "nightwave-player-state";
const PREFERENCES_KEY = "nightwave-ui-preferences";
const PLAYLISTS_KEY = "nightwave-playlists";
const LIKES_KEY = "nightwave-likes";

// ============================================================
// DOM ELEMENTS
// ============================================================
const audio = document.getElementById("audioPlayer");
const playlistEl = document.getElementById("playlist");
const playlistGridEl = document.getElementById("playlistGrid");
const discoverRowEl = document.getElementById("discoverRow");
const queueListEl = document.getElementById("queueList");
const lyricsPreviewEl = document.getElementById("lyricsPreview");
const playerTitleEl = document.getElementById("playerTitle");
const playerArtistEl = document.getElementById("playerArtist");
const playerCoverEl = document.getElementById("playerCover");
const playPauseButton = document.getElementById("playPauseButton");
const playLabel = playPauseButton?.querySelector(".play-label");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const shuffleButton = document.getElementById("shuffleButton");
const repeatButton = document.getElementById("repeatButton");
const progressBar = document.getElementById("progressBar");
const volumeBar = document.getElementById("volumeBar");
const timeLeftEl = document.getElementById("timeLeft");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const filterChips = document.getElementById("filterChips");
const notificationsButton = document.getElementById("notificationsButton");
const settingsButton = document.getElementById("settingsButton");
const notificationsPopup = document.getElementById("notificationsPopup");
const settingsPopup = document.getElementById("settingsPopup");
const notificationList = document.getElementById("notificationList");
const themeOptions = document.getElementById("themeOptions");
const accentOptions = document.getElementById("accentOptions");
const compactDensityToggle = document.getElementById("compactDensityToggle");
const livePulseToggle = document.getElementById("livePulseToggle");
const waveMotionToggle = document.getElementById("waveMotionToggle");
const statTracksEl = document.getElementById("statTracks");
const statListeningEl = document.getElementById("statListening");
const statGenreEl = document.getElementById("statGenre");
const detailGenreEl = document.getElementById("detailGenre");
const detailDurationEl = document.getElementById("detailDuration");
const detailReleaseEl = document.getElementById("detailRelease");

// Now playing specific elements
const npCover = document.getElementById("npCover");
const npBgBlur = document.getElementById("npBgBlur");
const npTitle = document.getElementById("npTitle");
const npArtist = document.getElementById("npArtist");
const npGenre = document.getElementById("npGenre");
const npRelease = document.getElementById("npRelease");
const npDuration = document.getElementById("npDuration");
const npStatus = document.getElementById("npStatus");
const npPosition = document.getElementById("npPosition");
const npRemaining = document.getElementById("npRemaining");
const npLyricsScroll = document.getElementById("npLyricsScroll");
const npNoLyrics = document.getElementById("npNoLyrics");
const lyricsFileInput = document.getElementById("lyricsFileInput");
const lyricsDropZone = document.getElementById("lyricsDropZone");
const modeKaraoke = document.getElementById("modeKaraoke");
const modePlain = document.getElementById("modePlain");

// Playlist page specific elements
const plGridView = document.getElementById("plGridView");
const plDetailView = document.getElementById("plDetailView");
const plGrid = document.getElementById("plGrid");
const plDetailTitle = document.getElementById("plDetailTitle");
const plDetailStats = document.getElementById("plDetailStats");
const plDetailCover = document.getElementById("plDetailCover");
const plDetailBg = document.getElementById("plDetailBg");
const plTrackList = document.getElementById("plTrackList");
const plPlayAllBtn = document.getElementById("plPlayAllBtn");
const plShuffleBtn = document.getElementById("plShuffleBtn");
const plBackBtn = document.getElementById("plBackBtn");
const newPlaylistBtn = document.getElementById("newPlaylistBtn");
const plModal = document.getElementById("plModal");
const plModalCancel = document.getElementById("plModalCancel");
const plModalCreate = document.getElementById("plModalCreate");
const plNameInput = document.getElementById("plNameInput");

// Tracks page specific elements
const trStats = document.getElementById("trStats");
const trNowPlayingBar = document.getElementById("trNowPlayingBar");
const trNpCover = document.getElementById("trNpCover");
const trNpTitle = document.getElementById("trNpTitle");
const trNpArtist = document.getElementById("trNpArtist");
const trSearch = document.getElementById("trSearch");
const trFilterChips = document.getElementById("trFilterChips");
const trSort = document.getElementById("trSort");
const viewListBtn = document.getElementById("viewListBtn");
const viewGridBtn = document.getElementById("viewGridBtn");
const trListView = document.getElementById("trListView");
const trGridView = document.getElementById("trGridView");
const trList = document.getElementById("trList");
const trGrid = document.getElementById("trGrid");

// ============================================================
// APPLICATION STATE
// ============================================================
let currentSongIndex = 0;
let isPlaying = false;
let isShuffleEnabled = false;
let repeatMode = "all";
let currentFilter = "all";
let currentSearch = "";
let currentSort = "default";
let queue = songs.map((_, index) => index);
let likedSongs = new Set();
let currentPlaylistIndex = -1; // for playlist detail view
let parsedLines = []; // for lyrics
let activeLineIndex = -1;
let lyricsMode = "karaoke";
let currentView = "list"; // for tracks page
let lastLyricScrollTime = 0;

let preferences = {
  theme: "night",
  accent: "orange",
  compactDensity: false,
  livePulse: true,
  waveMotion: true,
};

// ============================================================
// UTILITY FUNCTIONS
// ============================================================
function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${String(secs).padStart(2, "0")}`;
}

function parseDurationLabel(durationLabel) {
  const [mins, secs] = durationLabel.split(":").map(Number);
  return mins * 60 + secs;
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function parseTimestamp(ts) {
  const [time, ms] = ts.replace(",", ".").split(".");
  const parts = time.split(":").map(Number);
  const seconds = parts[0] * 3600 + parts[1] * 60 + parts[2];
  return seconds + parseFloat("0." + (ms || "0"));
}

function parseTimestampedLyrics(raw) {
  const lines = [];
  const blocks = raw.trim().split(/\n(?=\d{2}:\d{2}:\d{2})/);

  for (const block of blocks) {
    const trimmed = block.trim();
    if (!trimmed) continue;

    const timingMatch = trimmed.match(
      /^(\d{2}:\d{2}:\d{2}[,\.]\d+)\s*-->\s*(\d{2}:\d{2}:\d{2}[,\.]\d+)\s*(?:\[([^\]]+)\])?/,
    );
    if (!timingMatch) continue;

    const start = parseTimestamp(timingMatch[1]);
    const end = parseTimestamp(timingMatch[2]);
    const speaker = timingMatch[3] || null;

    const textLines = trimmed.split("\n").slice(1).join(" ").trim();
    if (!textLines) continue;

    lines.push({ start, end, speaker, text: textLines });
  }

  return lines;
}

// ============================================================
// PLAYER CONTROLS & AUDIO
// ============================================================
function updateProgressFill() {
  const progress = Number(progressBar.value);
  progressBar.style.setProperty("--track-fill", `${progress}%`);
}

function updateVolumeFill() {
  const volume = Number(volumeBar.value);
  volumeBar.style.setProperty("--track-fill", `${volume}%`);
}

function updatePlayButtons() {
  document.body.classList.toggle("is-playing", isPlaying);
  if (playLabel) playLabel.textContent = isPlaying ? "Pause" : "Play";
  if (playPauseButton)
    playPauseButton.setAttribute("aria-label", isPlaying ? "Pause" : "Play");

  // Update now playing status if elements exist
  if (npStatus) npStatus.textContent = isPlaying ? "Playing" : "Paused";

  // Update tracks page now playing bar
  updateNowPlayingBar();

  // Re-render current view to update active states
  if (
    document.getElementById("plGridView") &&
    document.getElementById("plGridView").style.display !== "none"
  ) {
    renderGrid();
  } else if (
    plTrackList &&
    plDetailView &&
    plDetailView.classList &&
    plDetailView.classList.contains("open")
  ) {
    renderDetailTracks(currentPlaylistIndex);
  } else {
    renderTrackList();
  }
}

function updateTransportButtons() {
  if (shuffleButton) shuffleButton.classList.toggle("active", isShuffleEnabled);
  if (repeatButton)
    repeatButton.classList.toggle("repeat-one", repeatMode === "one");
}

function updateTrackUI() {
  const song = songs[currentSongIndex];
  if (playerTitleEl) playerTitleEl.textContent = song.title;
  if (playerArtistEl) playerArtistEl.textContent = song.artist;
  if (playerCoverEl) {
    playerCoverEl.src = song.cover;
    playerCoverEl.alt = `${song.title} cover art`;
  }
  if (detailGenreEl) detailGenreEl.textContent = song.genre;
  if (detailDurationEl) detailDurationEl.textContent = song.durationLabel;
  if (detailReleaseEl) detailReleaseEl.textContent = song.release;

  // Update now playing UI elements
  if (npCover) npCover.src = song.cover;
  if (npBgBlur) npBgBlur.style.backgroundImage = `url('${song.cover}')`;
  if (npTitle) npTitle.textContent = song.title;
  if (npArtist) npArtist.textContent = song.artist;
  if (npGenre) npGenre.textContent = song.genre;
  if (npRelease) npRelease.textContent = song.release;
  if (npDuration) npDuration.textContent = song.durationLabel;

  // Update lyrics
  if (song.lyricsData) {
    parsedLines = parseTimestampedLyrics(song.lyricsData);
    renderCurrentLyricsMode();
  } else {
    parsedLines = [];
    renderCurrentLyricsMode();
  }

  // Update queue display
  if (queueListEl) renderQueue();
}

function loadSong(index) {
  currentSongIndex = index;
  audio.src = songs[index].file;
  updateTrackUI();
  updateTransportButtons();
  savePlayerState();
}

async function playSong(index = currentSongIndex) {
  if (
    index !== currentSongIndex ||
    audio.src !== new URL(songs[index].file, window.location.href).href
  ) {
    loadSong(index);
  }
  try {
    await audio.play();
    isPlaying = true;
    updatePlayButtons();
  } catch (error) {
    isPlaying = false;
    updatePlayButtons();
    console.error("Playback could not start.", error);
  }
}

function pauseSong() {
  audio.pause();
  isPlaying = false;
  updatePlayButtons();
  savePlayerState();
}

function togglePlayback() {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

function getNextIndex() {
  if (isShuffleEnabled && songs.length > 1) {
    let nextIndex = currentSongIndex;
    while (nextIndex === currentSongIndex) {
      nextIndex = Math.floor(Math.random() * songs.length);
    }
    return nextIndex;
  }
  const currentQueueIndex = queue.indexOf(currentSongIndex);
  return queue[(currentQueueIndex + 1) % queue.length];
}

function getPreviousIndex() {
  if (audio.currentTime > 3) {
    return currentSongIndex;
  }
  const currentQueueIndex = queue.indexOf(currentSongIndex);
  return queue[(currentQueueIndex - 1 + queue.length) % queue.length];
}

function addToQueue(index) {
  queue = queue.filter((item) => item !== index);
  const currentQueueIndex = queue.indexOf(currentSongIndex);
  queue.splice(currentQueueIndex + 1, 0, index);
  if (queueListEl) renderQueue();
}

// ============================================================
// LYRICS FUNCTIONS
// ============================================================
function renderLyricsKaraoke() {
  if (!npLyricsScroll) return;

  if (!parsedLines.length) {
    npLyricsScroll.innerHTML = "";
    if (npNoLyrics) npLyricsScroll.appendChild(npNoLyrics);
    return;
  }

  npLyricsScroll.innerHTML = parsedLines
    .map((line, i) => {
      const speakerLabel = line.speaker
        ? line.speaker
            .replace("_", " ")
            .replace(/\b\w/g, (c) => c.toUpperCase())
        : "";
      return `
        <div class="lyric-line future" data-index="${i}" data-speaker="${line.speaker || ""}" data-start="${line.start}">
          ${speakerLabel ? `<span class="lyric-speaker">${escapeHtml(speakerLabel)}</span>` : ""}
          <span class="lyric-text">${escapeHtml(line.text)}</span>
        </div>
      `;
    })
    .join("");

  npLyricsScroll.querySelectorAll(".lyric-line").forEach((el) => {
    el.addEventListener("click", () => {
      const t = parseFloat(el.dataset.start);
      if (audio.duration) {
        audio.currentTime = t;
        progressBar.value = (t / audio.duration) * 100;
        updateProgressFill();
      }
    });
  });
}

function renderLyricsPlain() {
  if (!npLyricsScroll) return;

  if (!parsedLines.length) {
    npLyricsScroll.innerHTML = "";
    if (npNoLyrics) npLyricsScroll.appendChild(npNoLyrics);
    return;
  }
  npLyricsScroll.innerHTML = `<div style="font-size:0.95rem;line-height:1.85;color:var(--text-2);white-space:pre-wrap;">${escapeHtml(parsedLines.map((l) => l.text).join("\n"))}</div>`;
}

function renderCurrentLyricsMode() {
  if (!npLyricsScroll) return;
  if (lyricsMode === "plain") {
    renderLyricsPlain();
  } else {
    renderLyricsKaraoke();
    updateActiveLine();
  }
}

function updateActiveLine() {
  if (!parsedLines.length || lyricsMode !== "karaoke" || !npLyricsScroll)
    return;

  const ct = audio.currentTime;
  let newActive = -1;

  for (let i = 0; i < parsedLines.length; i++) {
    if (ct >= parsedLines[i].start && ct <= parsedLines[i].end) {
      newActive = i;
      break;
    }
    if (ct > parsedLines[i].end) {
      newActive = i;
    }
  }

  if (newActive === activeLineIndex) return;
  activeLineIndex = newActive;

  const allLines = npLyricsScroll.querySelectorAll(".lyric-line");
  allLines.forEach((el, i) => {
    el.classList.remove("active", "past", "future", "near");
    if (i < activeLineIndex) el.classList.add("past");
    else if (i === activeLineIndex) el.classList.add("active");
    else if (i === activeLineIndex + 1 || i === activeLineIndex + 2)
      el.classList.add("near");
    else el.classList.add("future");
  });

  const activeEl = npLyricsScroll.querySelector(".lyric-line.active");
  if (!activeEl) return;

  const now = performance.now();
  if (now - lastLyricScrollTime < 180) return;
  lastLyricScrollTime = now;

  activeEl.scrollIntoView({ behavior: "smooth", block: "center" });
}

// ============================================================
// TRACK LIST RENDERING (Index Page)
// ============================================================
function getFilteredSongs() {
  const searched = songs.filter((song) => {
    const haystack = `${song.title} ${song.artist} ${song.genre}`.toLowerCase();
    const filterMatches =
      currentFilter === "all" ||
      song.genre.toLowerCase().includes(currentFilter.toLowerCase());
    const searchMatches = haystack.includes(currentSearch);
    return filterMatches && searchMatches;
  });

  const sorted = [...searched];
  if (currentSort === "length") {
    sorted.sort(
      (a, b) =>
        parseDurationLabel(a.durationLabel) -
        parseDurationLabel(b.durationLabel),
    );
  } else if (currentSort === "genre") {
    sorted.sort((a, b) => a.genre.localeCompare(b.genre));
  } else {
    sorted.sort((a, b) => a.addedOrder - b.addedOrder);
  }
  return sorted;
}

function renderTrackList() {
  if (!playlistEl) return;

  const filteredSongs = getFilteredSongs();
  playlistEl.innerHTML = filteredSongs
    .map((song) => {
      const index = songs.indexOf(song);
      const isLiked = likedSongs.has(index);
      return `
        <div class="track-row ${index === currentSongIndex ? "active" : ""}" data-song-index="${index}">
          <div class="track-main">
            <div class="track-thumb">
              <img src="${song.cover}" alt="${song.title} artwork">
              <button class="row-play-button" type="button" data-song-index="${index}" aria-label="Play ${song.title}">
                <svg><use href="#icon-play"></use></svg>
              </button>
            </div>
            <div class="track-copy">
              <span class="track-title">${escapeHtml(song.title)}</span>
              <div class="track-meta">
                <span class="track-artist">${escapeHtml(song.artist)}</span>
                <div class="track-actions">
                  <button class="row-action" type="button" data-action="queue" data-song-index="${index}" aria-label="Add ${song.title} to queue">
                    <svg><use href="#icon-queue"></use></svg>
                  </button>
                  <button class="row-action ${isLiked ? "liked" : ""}" type="button" data-action="like" data-song-index="${index}" aria-label="Like ${song.title}">
                    <svg><use href="#icon-like"></use></svg>
                  </button>
                  <button class="row-action" type="button" data-action="playlist" data-song-index="${index}" aria-label="Add ${song.title} to playlist">
                    <svg><use href="#icon-plus"></use></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="track-genre"><span class="genre-tag">${escapeHtml(song.genre)}</span></div>
          <div class="track-time">${song.durationLabel}</div>
        </div>
      `;
    })
    .join("");
}

function renderDiscover() {
  if (!discoverRowEl) return;
  discoverRowEl.innerHTML = discoverItems
    .map(
      (item) => `
        <article class="discover-card">
          <img src="${item.cover}" alt="${item.title} artwork">
          <div class="discover-meta">
            <div>
              <strong>${escapeHtml(item.title)}</strong>
              <span>${escapeHtml(item.genre)}</span>
            </div>
            <span class="genre-tag">${escapeHtml(item.genre)}</span>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderPlaylistsGrid() {
  if (!playlistGridEl) return;
  playlistGridEl.innerHTML = playlists
    .map((playlist, pi) => {
      // Get first 4 covers for stacked design
      const coverImages = playlist.songIndices
        .slice(0, 4)
        .map((i) => `<img src="${songs[i].cover}" alt="cover">`)
        .join("");

      const totalSec = playlist.songIndices.reduce(
        (acc, i) => acc + parseDurationLabel(songs[i].durationLabel),
        0,
      );
      const mins = Math.round(totalSec / 60);

      return `
        <article class="playlist-card" data-pl-index="${pi}">
          <div class="playlist-stack">
            ${coverImages || '<div style="width:100%;height:100%;background:var(--surface-2);display:flex;align-items:center;justify-content:center;color:var(--text-3);font-size:2rem;">♪</div>'}
          </div>
          <div class="playlist-meta">
            <div>
              <strong>${escapeHtml(playlist.title)}</strong>
              <span>${playlist.songIndices.length} tracks · ${mins} min</span>
            </div>
            <button class="row-action" type="button" data-pl-play="${pi}" aria-label="Open ${playlist.title}">
              <svg><use href="#icon-chevron"></use></svg>
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

function buildMosaic(covers) {
  if (covers.length === 0) {
    return `<div style="width:100%;height:100%;background:var(--surface-2);display:flex;align-items:center;justify-content:center;color:var(--text-3);font-size:2rem;">♪</div>`;
  }
  if (covers.length === 1) {
    return `<img class="cover-single" src="${covers[0]}" alt="cover">`;
  }
  const cls = covers.length === 3 ? "mosaic three" : "mosaic";
  return `<div class="${cls}">${covers.map((c) => `<img src="${c}" alt="cover">`).join("")}</div>`;
}

function renderQueue() {
  if (!queueListEl) return;
  const orderedQueue = queue.filter((index) => index !== currentSongIndex);
  queueListEl.innerHTML = orderedQueue
    .slice(0, 6)
    .map((index) => {
      const song = songs[index];
      return `
        <div class="queue-item">
          <img src="${song.cover}" alt="${song.title} cover">
          <div>
            <strong>${escapeHtml(song.title)}</strong>
            <span>${escapeHtml(song.artist)}</span>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderNotifications() {
  if (!notificationList) return;
  notificationList.innerHTML = notifications
    .map(
      (item) => `
        <article class="notification-item">
          <span class="notification-dot" aria-hidden="true"></span>
          <div class="notification-copy">
            <strong>${escapeHtml(item.title)}</strong>
            <p>${escapeHtml(item.body)}</p>
            <p>${escapeHtml(item.time)}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function updateStats() {
  if (!statTracksEl) return;
  const totalSeconds = songs.reduce(
    (sum, song) => sum + parseDurationLabel(song.durationLabel),
    0,
  );
  const genreCounts = songs.reduce((acc, song) => {
    acc[song.genre] = (acc[song.genre] || 0) + 1;
    return acc;
  }, {});
  const favoriteGenre =
    Object.entries(genreCounts).sort((a, b) => b[1] - a[1])[0]?.[0] ||
    "Hip Hop";

  statTracksEl.textContent = String(songs.length);
  statListeningEl.textContent = `${Math.round(totalSeconds / 60)} min`;
  statGenreEl.textContent = favoriteGenre;
}

// ============================================================
// PLAYLIST PAGE FUNCTIONS
// ============================================================
function totalDuration(indices) {
  return indices.reduce(
    (acc, i) => acc + parseDurationLabel(songs[i].durationLabel),
    0,
  );
}

function renderGrid() {
  if (!plGrid) return;

  if (!playlists.length) {
    plGrid.innerHTML = `<div class="pl-empty" style="grid-column:1/-1;">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 7h10M4 12h10M4 17h6M17 8l4 2.5-4 2.5"/></svg>
      <p>No playlists yet. Hit "New playlist" to create one.</p>
    </div>`;
    return;
  }

  plGrid.innerHTML = playlists
    .map((pl, pi) => {
      const covers = pl.songIndices.slice(0, 4).map((i) => songs[i].cover);
      const dur = totalDuration(pl.songIndices);
      const mins = Math.round(dur / 60);
      return `
      <article class="pl-card" data-pl-index="${pi}" tabindex="0" aria-label="Open ${pl.title} playlist">
        <div class="pl-card-cover">
          ${buildMosaic(covers)}
          <div class="pl-card-play-overlay">
            <button class="pl-card-play-btn" type="button" data-pl-play="${pi}" aria-label="Play ${pl.title}">
              <svg viewBox="0 0 24 24"><path d="m8 5 11 7-11 7z"/></svg>
            </button>
          </div>
        </div>
        <div class="pl-card-body">
          <div class="pl-card-title">${escapeHtml(pl.title)}</div>
          <div class="pl-card-meta">
            <span class="pl-card-count">${pl.songIndices.length} track${pl.songIndices.length !== 1 ? "s" : ""}</span>
            <span class="pl-card-duration">${mins} min</span>
          </div>
        </div>
      </article>
    `;
    })
    .join("");

  plGrid.querySelectorAll(".pl-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      if (e.target.closest("[data-pl-play]")) return;
      openDetail(Number(card.dataset.plIndex));
    });
  });

  plGrid.querySelectorAll("[data-pl-play]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      playPlaylist(Number(btn.dataset.plPlay), false);
    });
  });
}

function openDetail(pi) {
  currentPlaylistIndex = pi;
  const pl = playlists[pi];

  if (plGridView) plGridView.style.display = "none";
  if (plDetailView) {
    plDetailView.classList.add("open");
    plDetailView.style.display = "block";
  }

  if (plDetailTitle) plDetailTitle.textContent = pl.title;
  const dur = totalDuration(pl.songIndices);
  if (plDetailStats)
    plDetailStats.textContent = `${pl.songIndices.length} track${pl.songIndices.length !== 1 ? "s" : ""} · ${Math.round(dur / 60)} min`;

  if (plDetailCover) {
    const covers = pl.songIndices.slice(0, 4).map((i) => songs[i].cover);
    plDetailCover.innerHTML = buildMosaic(covers);
  }

  const firstCover = pl.songIndices.length
    ? songs[pl.songIndices[0]].cover
    : "";
  if (plDetailBg)
    plDetailBg.style.backgroundImage = firstCover
      ? `url('${firstCover}')`
      : "none";

  renderDetailTracks(pi);
}

function renderDetailTracks(pi) {
  if (!plTrackList) return;
  const pl = playlists[pi];

  if (!pl.songIndices.length) {
    plTrackList.innerHTML = `<div class="pl-empty"><p>This playlist is empty.</p></div>`;
    return;
  }

  plTrackList.innerHTML = pl.songIndices
    .map((si, rowIndex) => {
      const song = songs[si];
      const isActive = si === currentSongIndex;
      return `
      <div class="pl-track-row ${isActive ? "active" : ""}" data-song-index="${si}" data-row="${rowIndex}">
        <div class="pl-track-num">
          <span class="pl-track-num-val">${isActive ? "▶" : rowIndex + 1}</span>
          <span class="pl-track-row-play"><svg viewBox="0 0 24 24"><path d="m8 5 11 7-11 7z"/></svg></span>
        </div>
        <div class="pl-track-main">
          <div class="pl-track-thumb"><img src="${song.cover}" alt="${song.title}"></div>
          <div class="pl-track-copy">
            <span class="pl-track-title">${escapeHtml(song.title)}</span>
            <span class="pl-track-artist">${escapeHtml(song.artist)}</span>
          </div>
        </div>
        <div class="pl-track-genre">${escapeHtml(song.genre)}</div>
        <div class="pl-track-duration">${song.durationLabel}</div>
      </div>
    `;
    })
    .join("");

  plTrackList.querySelectorAll(".pl-track-row").forEach((row) => {
    row.addEventListener("click", () => {
      const si = Number(row.dataset.songIndex);
      const pl = playlists[currentPlaylistIndex];
      const clickedPos = pl.songIndices.indexOf(si);
      queue = [
        ...pl.songIndices.slice(clickedPos),
        ...pl.songIndices.slice(0, clickedPos),
      ];
      playSong(si);
    });
  });
}

function closeDetail() {
  if (plDetailView) plDetailView.classList.remove("open");
  if (plGridView) plGridView.style.display = "block";
  if (plDetailView) plDetailView.style.display = "none";
  currentPlaylistIndex = -1;
}

function playPlaylist(pi, shuffle = false) {
  const pl = playlists[pi];
  if (!pl.songIndices.length) return;
  let indices = [...pl.songIndices];
  if (shuffle) indices = indices.sort(() => Math.random() - 0.5);
  queue = indices;
  playSong(indices[0]);
}

function savePlaylists() {
  localStorage.setItem(PLAYLISTS_KEY, JSON.stringify(playlists));
}

function loadSavedPlaylists() {
  try {
    const saved = JSON.parse(localStorage.getItem(PLAYLISTS_KEY));
    if (saved && Array.isArray(saved)) playlists = saved;
  } catch {}
}

// ============================================================
// TRACKS PAGE FUNCTIONS
// ============================================================
function renderTracksStats() {
  if (!trStats) return;
  const total = songs.length;
  const totalSec = songs.reduce(
    (a, s) => a + parseDurationLabel(s.durationLabel),
    0,
  );
  const genres = [...new Set(songs.map((s) => s.genre))].length;
  const artists = [...new Set(songs.map((s) => s.artist))].length;

  trStats.innerHTML = `
    <div class="tr-stat"><span>Total tracks</span><strong>${total}</strong></div>
    <div class="tr-stat"><span>Total time</span><strong>${Math.floor(totalSec / 60)} min</strong></div>
    <div class="tr-stat"><span>Genres</span><strong>${genres}</strong></div>
    <div class="tr-stat"><span>Artists</span><strong>${artists}</strong></div>
    <div class="tr-stat"><span>Liked</span><strong>${likedSongs.size}</strong></div>
  `;
}

function updateNowPlayingBar() {
  if (!trNowPlayingBar) return;
  if (isPlaying) {
    const song = songs[currentSongIndex];
    if (trNpCover) trNpCover.src = song.cover;
    if (trNpTitle) trNpTitle.textContent = song.title;
    if (trNpArtist) trNpArtist.textContent = song.artist;
    trNowPlayingBar.style.display = "flex";
  } else {
    trNowPlayingBar.style.display = "none";
  }
}

function getFilteredSongsForTracks() {
  let list = songs.filter((song) => {
    const hay = `${song.title} ${song.artist} ${song.genre}`.toLowerCase();
    const filterOk =
      currentFilter === "all" ||
      song.genre.toLowerCase() === currentFilter.toLowerCase();
    const searchOk = hay.includes(currentSearch);
    return filterOk && searchOk;
  });

  if (currentSort === "title")
    list.sort((a, b) => a.title.localeCompare(b.title));
  else if (currentSort === "artist")
    list.sort((a, b) => a.artist.localeCompare(b.artist));
  else if (currentSort === "duration")
    list.sort(
      (a, b) =>
        parseDurationLabel(a.durationLabel) -
        parseDurationLabel(b.durationLabel),
    );
  else if (currentSort === "release")
    list.sort((a, b) => Number(b.release) - Number(a.release));
  else list.sort((a, b) => a.addedOrder - b.addedOrder);

  return list;
}

function renderTracksList() {
  if (!trList) return;
  const filtered = getFilteredSongsForTracks();

  if (!filtered.length) {
    trList.innerHTML = `<div class="tr-empty">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
      <p>No tracks match your search or filter.</p>
    </div>`;
    return;
  }

  trList.innerHTML = filtered
    .map((song, rowIdx) => {
      const si = songs.indexOf(song);
      const isActive = si === currentSongIndex;
      const isLiked = likedSongs.has(si);
      const num = rowIdx + 1;

      return `
      <div class="tr-row ${isActive ? "active" : ""}" data-song-index="${si}">
        <div class="tr-row-num">
          <span class="tr-num-val">${isActive ? "▶" : num}</span>
          <span class="tr-row-play-icon"><svg viewBox="0 0 24 24"><path d="m8 5 11 7-11 7z"/></svg></span>
        </div>
        <div class="tr-row-main">
          <div class="tr-thumb">
            <img src="${escapeHtml(song.cover)}" alt="${escapeHtml(song.title)}">
            <div class="tr-thumb-overlay"><svg viewBox="0 0 24 24"><path d="m8 5 11 7-11 7z"/></svg></div>
          </div>
          <div class="tr-copy">
            <span class="tr-title">${escapeHtml(song.title)}</span>
            <span class="tr-artist">${escapeHtml(song.artist)}</span>
          </div>
        </div>
        <div><span class="tr-genre-tag">${escapeHtml(song.genre)}</span></div>
        <div class="tr-release">${song.release}</div>
        <div class="tr-duration">${song.durationLabel}</div>
        <div class="tr-row-actions">
          <button class="tr-action-btn ${isLiked ? "liked" : ""}" type="button" data-action="like" data-song-index="${si}" aria-label="${isLiked ? "Unlike" : "Like"} ${escapeHtml(song.title)}">
            <svg viewBox="0 0 24 24"><use href="#icon-heart"/></svg>
          </button>
          <button class="tr-action-btn" type="button" data-action="queue" data-song-index="${si}" aria-label="Add to queue">
            <svg viewBox="0 0 24 24"><use href="#icon-queue"/></svg>
          </button>
        </div>
      </div>
    `;
    })
    .join("");

  trList.querySelectorAll(".tr-row").forEach((row) => {
    row.addEventListener("click", (e) => {
      if (e.target.closest("[data-action]")) return;
      const si = Number(row.dataset.songIndex);
      if (si === currentSongIndex && isPlaying) {
        pauseSong();
        return;
      }
      queue = getFilteredSongsForTracks().map((s) => songs.indexOf(s));
      playSong(si);
    });
  });

  trList.querySelectorAll("[data-action]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const si = Number(btn.dataset.songIndex);
      if (btn.dataset.action === "like") toggleLike(si);
      if (btn.dataset.action === "queue") addToQueue(si);
    });
  });
}

function renderTracksGrid() {
  if (!trGrid) return;
  const filtered = getFilteredSongsForTracks();

  if (!filtered.length) {
    trGrid.innerHTML = `<div class="tr-empty" style="grid-column:1/-1;">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
      <p>No tracks match your search or filter.</p>
    </div>`;
    return;
  }

  trGrid.innerHTML = filtered
    .map((song) => {
      const si = songs.indexOf(song);
      const isActive = si === currentSongIndex;

      return `
      <article class="tr-card ${isActive ? "active" : ""}" data-song-index="${si}" tabindex="0">
        <div class="tr-card-cover">
          <img src="${escapeHtml(song.cover)}" alt="${escapeHtml(song.title)}">
          <div class="tr-card-overlay">
            <button class="tr-card-play" type="button" aria-label="Play ${escapeHtml(song.title)}">
              <svg viewBox="0 0 24 24"><path d="m8 5 11 7-11 7z"/></svg>
            </button>
          </div>
        </div>
        <div class="tr-card-body">
          <div class="tr-card-title">${escapeHtml(song.title)}</div>
          <div class="tr-card-artist">${escapeHtml(song.artist)}</div>
          <div class="tr-card-footer">
            <span class="tr-card-genre">${escapeHtml(song.genre)}</span>
            <span class="tr-card-dur">${song.durationLabel}</span>
          </div>
        </div>
      </article>
    `;
    })
    .join("");

  trGrid.querySelectorAll(".tr-card").forEach((card) => {
    const play = card.querySelector(".tr-card-play");
    const si = Number(card.dataset.songIndex);

    card.addEventListener("click", (e) => {
      if (e.target.closest(".tr-card-play")) return;
      queue = getFilteredSongsForTracks().map((s) => songs.indexOf(s));
      playSong(si);
    });

    if (play) {
      play.addEventListener("click", (e) => {
        e.stopPropagation();
        queue = getFilteredSongsForTracks().map((s) => songs.indexOf(s));
        playSong(si);
      });
    }
  });
}

function renderCurrentTracksView() {
  if (currentView === "list") {
    if (trListView) trListView.style.display = "block";
    if (trGridView) trGridView.style.display = "none";
    renderTracksList();
  } else {
    if (trListView) trListView.style.display = "none";
    if (trGridView) trGridView.style.display = "block";
    renderTracksGrid();
  }
}

function toggleLike(si) {
  if (likedSongs.has(si)) likedSongs.delete(si);
  else likedSongs.add(si);
  localStorage.setItem(LIKES_KEY, JSON.stringify([...likedSongs]));
  renderTracksStats();
  if (currentView === "list") renderTracksList();
  else renderTracksGrid();
  renderTrackList(); // also update index page if visible
}

// ============================================================
// PREFERENCES & PERSISTENCE
// ============================================================
function applyPreferences() {
  document.body.dataset.theme = preferences.theme;
  document.body.dataset.accent = preferences.accent;
  document.body.classList.toggle("compact-density", preferences.compactDensity);
  document.body.classList.toggle("no-live-pulse", !preferences.livePulse);
  document.body.classList.toggle("reduced-wave", !preferences.waveMotion);

  if (themeOptions) {
    themeOptions.querySelectorAll("[data-theme]").forEach((button) => {
      button.classList.toggle(
        "active",
        button.dataset.theme === preferences.theme,
      );
    });
  }
  if (accentOptions) {
    accentOptions.querySelectorAll("[data-accent]").forEach((button) => {
      button.classList.toggle(
        "active",
        button.dataset.accent === preferences.accent,
      );
    });
  }

  if (compactDensityToggle)
    compactDensityToggle.checked = preferences.compactDensity;
  if (livePulseToggle) livePulseToggle.checked = preferences.livePulse;
  if (waveMotionToggle) waveMotionToggle.checked = preferences.waveMotion;
}

function savePreferences() {
  localStorage.setItem(PREFERENCES_KEY, JSON.stringify(preferences));
}

function loadPreferences() {
  try {
    const saved = JSON.parse(localStorage.getItem(PREFERENCES_KEY));
    if (!saved) return;
    preferences = { ...preferences, ...saved };
  } catch (error) {
    console.error("Unable to restore UI preferences.", error);
  }
}

function savePlayerState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      currentSongIndex,
      currentTime: audio.currentTime || 0,
      volume: audio.volume,
      isShuffleEnabled,
      repeatMode,
      wasPlaying: isPlaying,
    }),
  );
}

function loadPlayerState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return;

    if (
      Number.isInteger(saved.currentSongIndex) &&
      songs[saved.currentSongIndex]
    ) {
      currentSongIndex = saved.currentSongIndex;
    }
    if (typeof saved.volume === "number") {
      audio.volume = saved.volume;
      if (volumeBar) volumeBar.value = Math.round(saved.volume * 100);
    }
    isShuffleEnabled = Boolean(saved.isShuffleEnabled);
    repeatMode = saved.repeatMode === "one" ? "one" : "all";

    loadSong(currentSongIndex);

    if (typeof saved.currentTime === "number") {
      audio.addEventListener(
        "loadedmetadata",
        () => {
          audio.currentTime = Math.min(
            saved.currentTime,
            audio.duration || saved.currentTime,
          );
        },
        { once: true },
      );
    }
    if (saved.wasPlaying === true) {
      // Wait a moment for everything to be ready, then auto-play
      setTimeout(() => {
        if (audio.src && audio.duration) {
          playSong(currentSongIndex).catch((e) =>
            console.log("Auto-play prevented:", e),
          );
        }
      }, 500);
    }
  } catch (error) {
    console.error("Unable to restore saved player state.", error);
  }
}

function loadLikes() {
  try {
    const saved = JSON.parse(localStorage.getItem(LIKES_KEY));
    if (Array.isArray(saved)) likedSongs = new Set(saved);
  } catch {}
}

function closePopups() {
  if (notificationsPopup) notificationsPopup.hidden = true;
  if (settingsPopup) settingsPopup.hidden = true;
  if (notificationsButton)
    notificationsButton?.setAttribute("aria-expanded", "false");
  if (settingsButton) settingsButton?.setAttribute("aria-expanded", "false");
}

// ============================================================
// EVENT HANDLERS
// ============================================================
function handleTrackClick(event) {
  const actionButton = event.target.closest("[data-action]");
  if (actionButton) {
    const targetIndex = Number(actionButton.dataset.songIndex);
    if (actionButton.dataset.action === "queue") {
      addToQueue(targetIndex);
    }
    if (actionButton.dataset.action === "like") {
      toggleLike(targetIndex);
    }
    return;
  }

  const target = event.target.closest("[data-song-index]");
  if (!target) return;
  const targetIndex = Number(target.dataset.songIndex);

  if (targetIndex === currentSongIndex && !audio.paused) {
    pauseSong();
    return;
  }
  playSong(targetIndex);
}

function loadLyricsFile(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const raw = e.target.result;
    parsedLines = parseTimestampedLyrics(raw);
    activeLineIndex = -1;
    renderCurrentLyricsMode();
  };
  reader.readAsText(file);
}

// ============================================================
// INITIALIZATION
// ============================================================
function init() {
  // Load saved data
  loadPreferences();
  applyPreferences();
  loadLikes();
  loadSavedPlaylists();
  loadPlayerState();

  // Render UI components
  updateStats();
  renderNotifications();
  renderDiscover();
  renderPlaylistsGrid();
  renderTrackList();
  renderQueue();
  renderTracksStats();
  renderCurrentTracksView();

  // Update player UI
  updatePlayButtons();
  updateProgressFill();
  updateVolumeFill();

  // Audio event listeners
  audio.addEventListener("loadedmetadata", () => {
    if (timeLeftEl) timeLeftEl.textContent = `-${formatTime(audio.duration)}`;
  });

  // ============================================================
  // ULTRA SMOOTH PROGRESS BAR - REPLACE the existing audio event listeners section
  // ============================================================

  // Remove the old timeupdate listener that was causing jumps
  // We'll replace it with a continuous animation that interpolates smoothly

  let animationFrameId = null;
  let isDraggingProgress = false;
  let smoothProgressValue = 0;
  let lastTimestamp = 0;
  let lastKnownCurrentTime = 0;

  function startProgressAnimation() {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }

    if (!isPlaying || !audio.duration || !isFinite(audio.duration)) return;

    // Store the starting time for smooth interpolation
    lastTimestamp = performance.now();
    lastKnownCurrentTime = audio.currentTime;

    function updateProgress(now) {
      if (!audio.duration || !isFinite(audio.duration)) {
        animationFrameId = null;
        return;
      }

      let currentTime;

      if (isDraggingProgress) {
        // When dragging, use the smooth value
        currentTime = (smoothProgressValue / 100) * audio.duration;
      } else {
        // When not dragging, smoothly interpolate between audio updates
        if (isPlaying && !audio.paused) {
          // Calculate elapsed time since last frame for smooth interpolation
          const delta = Math.min(0.033, (now - lastTimestamp) / 1000); // Cap at 33ms
          lastTimestamp = now;

          // Smoothly increment current time based on playback
          const interpolatedTime = lastKnownCurrentTime + delta;

          // Sync with actual audio occasionally to prevent drift
          const actualTime = audio.currentTime;
          const drift = Math.abs(interpolatedTime - actualTime);

          if (drift > 0.05) {
            // If drift is too large, sync with actual audio
            currentTime = actualTime;
            lastKnownCurrentTime = actualTime;
          } else {
            currentTime = interpolatedTime;
            lastKnownCurrentTime = interpolatedTime;
          }
        } else {
          currentTime = audio.currentTime;
          lastKnownCurrentTime = currentTime;
        }
      }

      // Ensure currentTime is within bounds
      currentTime = Math.max(0, Math.min(currentTime, audio.duration));

      // Calculate progress percentage
      const progress = (currentTime / audio.duration) * 100;

      // Update progress bar value
      if (progressBar && Math.abs(progressBar.value - progress) > 0.01) {
        progressBar.value = progress;
        updateProgressFill();
      }

      // Update time displays
      const remaining = Math.max(0, audio.duration - currentTime);
      if (timeLeftEl) timeLeftEl.textContent = `-${formatTime(remaining)}`;
      if (npPosition) npPosition.textContent = formatTime(currentTime);
      if (npRemaining) npRemaining.textContent = `-${formatTime(remaining)}`;

      // Continue animation
      animationFrameId = requestAnimationFrame(updateProgress);
    }

    animationFrameId = requestAnimationFrame(updateProgress);
  }

  function stopProgressAnimation() {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  }

  // Audio event listeners - simplified without the timeupdate
  audio.addEventListener("play", () => {
    isPlaying = true;
    updatePlayButtons();
    startProgressAnimation();
  });

  audio.addEventListener("pause", () => {
    isPlaying = false;
    updatePlayButtons();
    stopProgressAnimation();
  });

  audio.addEventListener("ended", () => {
    stopProgressAnimation();
    if (repeatMode === "one") {
      audio.currentTime = 0;
      playSong(currentSongIndex);
      return;
    }
    playSong(getNextIndex());
  });

  audio.addEventListener("loadedmetadata", () => {
    if (timeLeftEl) timeLeftEl.textContent = `-${formatTime(audio.duration)}`;
    // Reset lastKnownCurrentTime when new song loads
    lastKnownCurrentTime = 0;
  });

  let lastSyncTime = 0;

  // Keep a lightweight timeupdate just for saving state and syncing occasionally
  audio.addEventListener("timeupdate", () => {
    const now = performance.now();

    if (now - lastSyncTime > 200) {
      // throttle sync
      lastKnownCurrentTime = audio.currentTime;
      lastTimestamp = now;
      lastSyncTime = now;
    }

    updateActiveLine();
    savePlayerState();
  });

  // ULTRA SMOOTH DRAGGING - NO DELAY WHATSOEVER
  if (progressBar) {
    let rafId = null;
    let dragStartValue = 0;

    function updateDragVisuals(clientX) {
      const rect = progressBar.getBoundingClientRect();
      let x = (clientX - rect.left) / rect.width;
      x = Math.max(0, Math.min(1, x));
      smoothProgressValue = x * 100;

      // Update visual immediately
      progressBar.value = smoothProgressValue;
      updateProgressFill();

      // Update time displays immediately
      if (audio.duration) {
        const newTime = (smoothProgressValue / 100) * audio.duration;
        const remaining = Math.max(0, audio.duration - newTime);
        if (timeLeftEl) timeLeftEl.textContent = `-${formatTime(remaining)}`;
        if (npPosition) npPosition.textContent = formatTime(newTime);
        if (npRemaining) npRemaining.textContent = `-${formatTime(remaining)}`;
      }
    }

    function handleDragMove(e) {
      if (!isDraggingProgress) return;
      e.preventDefault();

      // Use requestAnimationFrame for smooth visual updates
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        updateDragVisuals(e.clientX);
        rafId = null;
      });
    }

    progressBar.addEventListener("mousedown", (e) => {
      e.preventDefault();
      isDraggingProgress = true;
      dragStartValue = smoothProgressValue;
      stopProgressAnimation();

      // Update immediately on click
      updateDragVisuals(e.clientX);

      // Add global listeners for smooth dragging
      document.addEventListener("mousemove", handleDragMove);
      document.addEventListener("mouseup", () => {
        if (!isDraggingProgress) return;

        // Apply the final position to audio
        if (audio.duration) {
          const finalTime = (smoothProgressValue / 100) * audio.duration;
          audio.currentTime = finalTime;
          lastKnownCurrentTime = finalTime;
          lastTimestamp = performance.now();
        }

        isDraggingProgress = false;
        if (rafId) cancelAnimationFrame(rafId);
        document.removeEventListener("mousemove", handleDragMove);

        if (isPlaying && !audio.paused) {
          startProgressAnimation();
        }
      });
    });

    // Handle click directly on progress bar
    progressBar.addEventListener("click", (e) => {
      if (isDraggingProgress) return;

      const rect = progressBar.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const newTime = x * audio.duration;
      audio.currentTime = newTime;
      lastKnownCurrentTime = newTime;
      lastTimestamp = performance.now();

      // Update visuals immediately
      const progress = x * 100;
      progressBar.value = progress;
      updateProgressFill();

      const remaining = Math.max(0, audio.duration - newTime);
      if (timeLeftEl) timeLeftEl.textContent = `-${formatTime(remaining)}`;
      if (npPosition) npPosition.textContent = formatTime(newTime);
      if (npRemaining) npRemaining.textContent = `-${formatTime(remaining)}`;
    });
  }

  // Also add CSS for super smooth transitions
  const style = document.createElement("style");
  style.textContent = `
    .progress-bar {
        transition: none !important;
    }
    .progress-fill {
        transition: width 0.016s linear !important;
    }
  `;
  document.head.appendChild(style);

  // Player button listeners
  if (playPauseButton)
    playPauseButton.addEventListener("click", togglePlayback);
  if (prevButton)
    prevButton.addEventListener("click", () => playSong(getPreviousIndex()));
  if (nextButton)
    nextButton.addEventListener("click", () => playSong(getNextIndex()));
  if (shuffleButton)
    shuffleButton.addEventListener("click", () => {
      isShuffleEnabled = !isShuffleEnabled;
      updateTransportButtons();
      savePlayerState();
    });
  if (repeatButton)
    repeatButton.addEventListener("click", () => {
      repeatMode = repeatMode === "all" ? "one" : "all";
      updateTransportButtons();
      savePlayerState();
    });
  if (progressBar)
    progressBar.addEventListener("input", () => {
      if (!audio.duration) return;
      audio.currentTime = (Number(progressBar.value) / 100) * audio.duration;
      updateProgressFill();
    });
  if (volumeBar)
    volumeBar.addEventListener("input", () => {
      audio.volume = Number(volumeBar.value) / 100;
      updateVolumeFill();
      savePlayerState();
    });

  // Search and filter listeners (index page)
  if (searchInput)
    searchInput.addEventListener("input", () => {
      currentSearch = searchInput.value.trim().toLowerCase();
      renderTrackList();
    });
  if (sortSelect)
    sortSelect.addEventListener("change", () => {
      currentSort = sortSelect.value;
      renderTrackList();
    });
  if (filterChips)
    filterChips.addEventListener("click", (event) => {
      const chip = event.target.closest("[data-filter]");
      if (!chip) return;
      currentFilter = chip.dataset.filter;
      document
        .querySelectorAll(".chip")
        .forEach((item) => item.classList.toggle("active", item === chip));
      renderTrackList();
    });

  // Playlist click handler
  if (playlistEl) playlistEl.addEventListener("click", handleTrackClick);

  // Popup listeners
  if (notificationsButton)
    notificationsButton.addEventListener("click", (event) => {
      event.stopPropagation();
      const shouldOpen = notificationsPopup.hidden;
      closePopups();
      notificationsPopup.hidden = !shouldOpen;
      notificationsButton.setAttribute("aria-expanded", String(shouldOpen));
    });
  if (settingsButton)
    settingsButton.addEventListener("click", (event) => {
      event.stopPropagation();
      const shouldOpen = settingsPopup.hidden;
      closePopups();
      settingsPopup.hidden = !shouldOpen;
      settingsButton.setAttribute("aria-expanded", String(shouldOpen));
    });
  if (notificationsPopup)
    notificationsPopup.addEventListener("click", (event) =>
      event.stopPropagation(),
    );
  if (settingsPopup)
    settingsPopup.addEventListener("click", (event) => event.stopPropagation());

  // Theme and accent listeners
  if (themeOptions)
    themeOptions.addEventListener("click", (event) => {
      const button = event.target.closest("[data-theme]");
      if (!button) return;
      preferences.theme = button.dataset.theme;
      applyPreferences();
      savePreferences();
    });
  if (accentOptions)
    accentOptions.addEventListener("click", (event) => {
      const button = event.target.closest("[data-accent]");
      if (!button) return;
      preferences.accent = button.dataset.accent;
      applyPreferences();
      savePreferences();
      updateProgressFill();
      updateVolumeFill();
    });
  if (compactDensityToggle)
    compactDensityToggle.addEventListener("change", () => {
      preferences.compactDensity = compactDensityToggle.checked;
      applyPreferences();
      savePreferences();
    });
  if (livePulseToggle)
    livePulseToggle.addEventListener("change", () => {
      preferences.livePulse = livePulseToggle.checked;
      applyPreferences();
      savePreferences();
    });
  if (waveMotionToggle)
    waveMotionToggle.addEventListener("change", () => {
      preferences.waveMotion = waveMotionToggle.checked;
      applyPreferences();
      savePreferences();
    });

  // Lyrics mode toggles
  if (modeKaraoke)
    modeKaraoke.addEventListener("click", () => {
      lyricsMode = "karaoke";
      if (modeKaraoke) modeKaraoke.classList.add("active");
      if (modePlain) modePlain.classList.remove("active");
      renderCurrentLyricsMode();
    });
  if (modePlain)
    modePlain.addEventListener("click", () => {
      lyricsMode = "plain";
      if (modePlain) modePlain.classList.add("active");
      if (modeKaraoke) modeKaraoke.classList.remove("active");
      renderCurrentLyricsMode();
    });

  // Lyrics file upload
  if (lyricsFileInput) {
    lyricsFileInput.addEventListener("change", (e) => {
      if (e.target.files[0]) loadLyricsFile(e.target.files[0]);
    });
  }
  if (lyricsDropZone) {
    lyricsDropZone.addEventListener("dragover", (e) => {
      e.preventDefault();
      lyricsDropZone.classList.add("drag-over");
    });
    lyricsDropZone.addEventListener("dragleave", () =>
      lyricsDropZone.classList.remove("drag-over"),
    );
    lyricsDropZone.addEventListener("drop", (e) => {
      e.preventDefault();
      lyricsDropZone.classList.remove("drag-over");
      const file = e.dataTransfer.files[0];
      if (file && file.name.endsWith(".txt")) loadLyricsFile(file);
    });
  }

  // Playlist page listeners
  if (newPlaylistBtn) {
    newPlaylistBtn.addEventListener("click", () => {
      if (plModal) plModal.classList.add("open");
      if (plNameInput) setTimeout(() => plNameInput.focus(), 100);
    });
  }
  if (plModalCancel) {
    plModalCancel.addEventListener("click", () => {
      if (plModal) plModal.classList.remove("open");
    });
  }
  if (plModal) {
    plModal.addEventListener("click", (e) => {
      if (e.target === plModal) plModal.classList.remove("open");
    });
  }
  if (plModalCreate) {
    plModalCreate.addEventListener("click", () => {
      const name = plNameInput ? plNameInput.value.trim() : "";
      if (!name) return;
      playlists.push({ title: name, songIndices: [] });
      savePlaylists();
      renderGrid();
      if (plModal) plModal.classList.remove("open");
    });
  }
  if (plNameInput) {
    plNameInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && plModalCreate) plModalCreate.click();
      if (e.key === "Escape" && plModal) plModal.classList.remove("open");
    });
  }
  if (plBackBtn) plBackBtn.addEventListener("click", closeDetail);
  if (plPlayAllBtn) {
    plPlayAllBtn.addEventListener("click", () => {
      if (currentPlaylistIndex >= 0) playPlaylist(currentPlaylistIndex, false);
    });
  }
  if (plShuffleBtn) {
    plShuffleBtn.addEventListener("click", () => {
      if (currentPlaylistIndex >= 0) playPlaylist(currentPlaylistIndex, true);
    });
  }

  // Tracks page listeners
  if (viewListBtn) {
    viewListBtn.addEventListener("click", () => {
      currentView = "list";
      if (viewListBtn) viewListBtn.classList.add("active");
      if (viewGridBtn) viewGridBtn.classList.remove("active");
      renderCurrentTracksView();
    });
  }
  if (viewGridBtn) {
    viewGridBtn.addEventListener("click", () => {
      currentView = "grid";
      if (viewGridBtn) viewGridBtn.classList.add("active");
      if (viewListBtn) viewListBtn.classList.remove("active");
      renderCurrentTracksView();
    });
  }
  if (trFilterChips) {
    trFilterChips.addEventListener("click", (e) => {
      const chip = e.target.closest("[data-filter]");
      if (!chip) return;
      currentFilter = chip.dataset.filter;
      document
        .querySelectorAll("#trFilterChips .tr-chip")
        .forEach((c) => c.classList.toggle("active", c === chip));
      renderCurrentTracksView();
    });
  }
  if (trSearch) {
    trSearch.addEventListener("input", (e) => {
      currentSearch = e.target.value.trim().toLowerCase();
      renderCurrentTracksView();
    });
  }
  if (trSort) {
    trSort.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderCurrentTracksView();
    });
  }

  // Global keyboard shortcuts
  document.addEventListener("click", () => closePopups());
  document.addEventListener("keydown", (event) => {
    const target = event.target;
    const isTyping =
      target instanceof HTMLElement &&
      (target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable);
    if (isTyping) return;

    if (event.code === "Space") {
      event.preventDefault();
      togglePlayback();
    }
    if (event.code === "ArrowRight") {
      playSong(getNextIndex());
    }
    if (event.code === "ArrowLeft") {
      playSong(getPreviousIndex());
    }
    if (event.code === "Escape") {
      closePopups();
      if (plDetailView && plDetailView.classList.contains("open"))
        closeDetail();
    }
  });
}

// Start the application when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

// Expose global functions for onclick handlers
window.playSong = playSong;
window.pauseSong = pauseSong;
window.togglePlayback = togglePlayback;
window.addToQueue = addToQueue;
window.getNextIndex = getNextIndex;
window.getPreviousIndex = getPreviousIndex;
window.songs = songs;
window.getCurrentSongIndex = () => currentSongIndex;
window.getIsPlaying = () => isPlaying;
