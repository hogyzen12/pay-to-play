import { v4 as uuidv4 } from 'uuid';

export const raffleFAQs = {
  title: 'FAQs',
  items: [
    {
      id: uuidv4(),
      title: 'What is the Diamonds Game?',
      description:
        'The Diamonds Game is a fun game for holders to try and increase the number of DMNDS they have. The DMND pool has been seeded with 165 DMNDS from the treasury! These initial 165 entries made by the treasury cannot win the game. The number of winners will be determined by the number of entries divided by 10. Each winner will win 10 DMNDS. Unlimited entries until time limit expires - 1 entry per DMND spent. Entries recorded on the blockchain - winners randomly selected. ',
    },
    {
      id: uuidv4(),
      title: 'How it works?',
      description:
        'Pick which raffle you want to enter. Purchase an entry to the raffle of your choice using your DMNDS. Unlimited entries until time limit expires - 1 entry per DMND spent. Entries recorded on the blockchain - winners randomly selected. ',
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
  title: 'Archive - Previous Results',
  items: [
    {
      id: uuidv4(),
      title: 'Raffle #002 Lionel Trashi',
      description:
        'Below is all the information needed to verify this raffle on chain:',
      archive: [
        {
          id: uuidv4(),
          text: 'Winner: Ticket #274',
          link: '',
        },
        {
          id: uuidv4(),
          text: 'Winning Entry:',
          link: 'https://solscan.io/tx/3uXDWGWQmkV8bKdqGwBBAJYn4ZiBx5hbi52fVN3YQRJNQrQSeYgN7wgNcD1ZE5vriLe8GPryuvLdQYeQ4obFyCRd',
        },
        {
          id: uuidv4(),
          text: 'Tickets Sold: 309',
        },
        {
          id: uuidv4(),
          text: 'Payout:',
          link: 'https://solscan.io/tx/48NFCw9fCeYAPyXsqdKBh4Utnn3fyTRu7f3nMmbSVKDr5KmZ3BCvsf57NTRKiJapc4NoAQ1K2dEGSbkoqmcb3azk',
        },
        {
          id: uuidv4(),
          text: 'Entry Wallet: RfLEqoqP9KDrJXurCppiQSbPz2VfsmMbijEq9ffh3uv',
          link: '',
        },
      ],
    },
    {
      id: uuidv4(),
      title: 'Raffle #001 Count Trashula',
      description:
        'Below is all the information needed to verify this raffle on chain:',
      archive: [
        {
          id: uuidv4(),
          text: 'Winner: Ticket #334',
          link: '',
        },
        {
          id: uuidv4(),
          text: 'Winning Entry:',
          link: 'https://solscan.io/tx/3DKiDBmijVpr2Vykb9bKPDCbLe3q78CnBxf77bfLhfWBu9wUPWyTgRGYEJch4VkqoxoDBJcmYSJmksau8qWW3NZU',
        },
        {
          id: uuidv4(),
          text: 'Tickets Sold: 353',
        },
        {
          id: uuidv4(),
          text: 'Payout:',
          link: 'https://solscan.io/tx/3WKTEdeqHLtSsK9CtmYHSAKA8JvYNsh2cdRTJwFXskj1HHabsNAWssHNDzzid3oHwqFwmwGL4ZpF5MThMqgwEB4b',
        },
        {
          id: uuidv4(),
          text: 'Entry Wallet: RfLzaUVd3BYbonSiztTGho1RKKxmmnce97p2AWDJvAE',
          link: '',
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
