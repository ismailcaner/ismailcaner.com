const { NEXT_PUBLIC_API_KEY, NEXT_PUBLIC_BASE_ID, NEXT_PUBLIC_DATA_TABLE_NAME, NEXT_PUBLIC_UNSPLASH_ACCESS_KEY} = process.env;

const usercontentUrl = `https://api.airtable.com/v0/${NEXT_PUBLIC_BASE_ID}/${NEXT_PUBLIC_DATA_TABLE_NAME}`;
const unsplash =  `https://api.unsplash.com/users/ismailcaner/photos/?client_id=${NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`;

const apimethod = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${NEXT_PUBLIC_API_KEY}`,
  }
};

const accessToken = process.env.NEXT_RAINDROP_ACCESS_TOKEN;

const projectID = 46546686;
const bookmarkID = 46547052;

const projectUrl = `https://api.raindrop.io/rest/v1/raindrops/${projectID}`;
const bookmarksUrl = `https://api.raindrop.io/rest/v1/raindrops/${bookmarkID}`;

const raindropmethod = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`
  }
};

export async function getPhotos() {
  const response = await fetch(unsplash);
  const content = await response.json();
  return content;
}

export async function getUsercontent() {
  const response = await fetch(usercontentUrl, apimethod);
  const content = await response.json();
  return content.records;
}

export async function getRaindrop() {
  const response = await fetch(projectUrl, raindropmethod);
  const content = await response.json();
  return content.items;
}

export async function getBookmark() {
  const response = await fetch(bookmarksUrl, raindropmethod);
  const content = await response.json();
  return content.items;
}

export async function getBookmarks({
  perPage = 50,
  page = 0,
} = {}) {
    const url = new URL(bookmarksUrl);
    url.searchParams.append('perpage', perPage.toString());
    url.searchParams.append('page', page.toString());

    const response = await fetch(url.toString(), raindropmethod);
    const content = await response.json();
    return content.items;
}

