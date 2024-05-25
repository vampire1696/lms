import { gql, request } from "graphql-request";

const MASTER_URL =
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clwm08gdg039a07w2v6sknv5j/master";

export const getCourseList = async () => {
  const query = gql`
    query courseList {
      courseLists {
        banner {
          url
        }
        name
        description
        id
        tag
        sourceCode
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

export const getCourseById = async (id) => {
  const query =
    gql`
    query course {
      courseList(where: { id: "` +
    id +
    `" }) {
        chapter {
          ... on Chapter {
            id
            name
            video {
              url
            }
            videoId
            youtubeUrl
          }
        }
        description
        id
        name
        sourceCode
        tag
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};
