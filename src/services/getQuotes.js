

export const getQuotesLibraryService = async () => {
  try {
    console.log("getQuotesLibraryService - called");
    console.log("getQuotesLibraryService fetching");
    const response = await fetch("/quotesBackupLibrary.json");

    console.log("getQuotesLibraryService jsoning");
    const quotesBackupLibrary = await response.json();

    console.log("getQuotesLibraryService - quotesBackupLibrary:");
    console.log(quotesBackupLibrary);
    return quotesBackupLibrary;

  } catch (error) {console.error(error)}
};
