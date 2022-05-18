import { v4 as uuidv4 } from 'uuid';

export const raffleFAQs = {
  title: 'FAQs',
  items: [
    {
      id: uuidv4(),
      title: 'How it works?',
      description:
        'Pick which raffle you want to enter. Purchase an entry to the raffle of your choice using your DMNDS. Unlimited entries until time limit expires - 1 entry per DMND spent. Entries recorded on the blockchain - winner randomly selected. ',
    },
    {
      id: uuidv4(),
      title: 'My transaction failed ?',
      description:
        'If your transaction does not go through - do not worry! Just refresh the page and check your wallet to confirm it has failed before trying again !',
    },
    {
      id: uuidv4(),
      title: 'How do I know which number entry I am / who wins ?',
      description:
        'Your entry number will appear once your entry is complete. It is also written on the blockchain, and you can find this by looking up your entry transaction! The winning entry and wallet will be shown once they have been drawn. The winner will receive the NFT directly into their wallet !',
    },
  ],
};

export const raffleArchive = {
  title: 'Archive',
  items: [
    {
      id: uuidv4(),
      title: 'Degen Trash Panda #7934',
      description:
        'Pick which raffle you want to enter. Purchase an entry to the raffle of your choice using your DMNDS. Unlimited entries until time limit expires - 1 entry per DMND spent. Entries recorded on the blockchain - winner randomly selected. ',
      archive: [
        {
          id: uuidv4(),
          text: 'Winner: Will Smith',
        },
        {
          id: uuidv4(),
          text: '309: SOLD',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'Degen Trash Panda #601',
      description:
        'If your transaction does not go through - do not worry! Just refresh the page and check your wallet to confirm it has failed before trying again !',
      archive: [
        {
          id: uuidv4(),
          text: 'Winner: Will Smith',
        },
        {
          id: uuidv4(),
          text: '353: SOLD',
        },
      ],
    },
  ],
};

export const membershipFAQs = {
  title: 'FAQs',
  items: [
    {
      id: uuidv4(),
      title: 'How it works?',
      description: 'test ',
    },
    {
      id: uuidv4(),
      title: 'How it works?',
      description: 'test',
    },
  ],
};
