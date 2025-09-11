import { Button } from './ui/button';
import { useState } from 'react';
import { FaCopy } from 'react-icons/fa';

export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const emailText = `To the Presidents of the Football federations of Belgium, England, France, Greece, Ireland,
Italy, Norway, Scotland and Spain
Dear Presidents,
We love football.
To us football is a religion, a family, a community. Our national and club pitches are sacred,
our stadium seats hallowed. It is here we form our closest bonds, our strongest memories and
family traditions that last generations.
Football isn't just a game. Football is life.
But today our pitches are stained with blood, and our teams covered in shame.
In Gaza, football pitches are turning into graveyards, dreams of football are being wiped
away.
Israel kills the equivalent of two children's football teams every single day. Players,
fans, and families who live and breathe the game are being bombed, starved, and displaced.
And you do nothing. Instead, Israel is playing in Europe, on our pitches, in our stadiums.
This gruesome show must stop. Where do we look when their national anthem plays in the
stadium, knowing what crimes are being committed in their name?
Everywhere, we the people are speaking out. In stadiums across the world we sing for
Palestine, raise flags, and display banners of solidarity - often risking punishment for doing
so. Our message is clear: football can no longer turn a blind eye.
You acted before. When Russia invaded Ukraine, football federations and associations across
Europe boycotted the Russian National team and Russian club teams, leading to their
eventual suspension from the sport.

The same principle must apply here. We value the lives of Palestinian children equally - do
you?

If your Federation boycotts Israel's national team, their club teams, and ban their players,
UEFA and FIFA will be forced to listen. Refuse to play them now and call for Israel to be
suspended.
This is not about politics, it is about humanity, about the very values our sport claims to
represent. Are you with us?
Sincerely,
[Insert name]`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(emailText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <Button
      onClick={handleCopy}
      size="lg"
      variant={'default'}
      className="rounded-full uppercase bg-boycott-red hover:bg-boycott-red/90 text-white transition cursor-pointer hover:underline"
    >
      <FaCopy />
      {copied ? 'Copied!' : 'Copy Email Text'}
    </Button>
  );
}
