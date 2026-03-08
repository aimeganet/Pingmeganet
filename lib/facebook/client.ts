export async function fetchFacebookPages(userToken: string) {
  const version = process.env.FACEBOOK_GRAPH_VERSION ?? 'v21.0';
  const response = await fetch(`https://graph.facebook.com/${version}/me/accounts?access_token=${userToken}`);

  if (!response.ok) {
    throw new Error('Failed to fetch Facebook pages.');
  }

  return response.json();
}
