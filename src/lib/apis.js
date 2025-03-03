const unsplashtoken = process.env.NEXT_UNSPLASH_ACCESS_KEY;
const unsplash = `https://api.unsplash.com/users/ismailcaner/photos/?client_id=${unsplashtoken}`;
const unsplashStats = `https://api.unsplash.com/users/ismailcaner/statistics/?client_id=${unsplashtoken}`;

const accessToken = process.env.NEXT_RAINDROP_ACCESS_TOKEN;
const projectID = 46546686;
const bookmarkID = 46547052;
const projectUrl = `https://api.raindrop.io/rest/v1/raindrops/${projectID}`;
const bookmarksUrl = `https://api.raindrop.io/rest/v1/raindrops/${bookmarkID}`;

const raindropmethod = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  },
};

export async function getMetaData() {
  const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
  const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
  const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?content_type=metaData`;

  const res = await fetch(url, {
      headers: {
          'Authorization': `Bearer ${accessToken}`,
      },
  });

  const data = await res.json();
  return data.items;
}

export async function getHomePage() {
  const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
  const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
  const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?content_type=homePage`;

  const res = await fetch(url, {
      headers: {
          'Authorization': `Bearer ${accessToken}`,
      },
  });

  const data = await res.json();
  return data.items;
}

export async function getWorkspace() {
  const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
  const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
  const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?content_type=workspace`;

  const res = await fetch(url, {
      headers: {
          'Authorization': `Bearer ${accessToken}`,
      },
  });

  const data = await res.json();
  return data.items;
}

export async function getPhotos() {
  const response = await fetch(unsplash);
  const data = await response.json();
  return data;
}

export async function getPhotosStats() {
  const response = await fetch(unsplashStats);
  const stats = await response.json();
  return stats;
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
