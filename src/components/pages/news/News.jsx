import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Container, Divider, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import { BACKEND_URI } from "../../../index";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const NEWS_QUERY = gql`
  query GetNews($locale: I18NLocaleCode) {
    news(locale: $locale) {
      data {
        id
        attributes {
          title
          description
          newsDate
          newsId
          createdAt
          images {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
      meta {
        pagination {
          page
          total
        }
      }
    }
  }
`;
const News = () => {
  const { t, i18n } = useTranslation();

  const { data, loading, error } = useQuery(NEWS_QUERY, {
    variables: {
      locale: i18n.language,
    },
  });

  if (loading) return <div>Loading...</div>;

  const newsData = data?.news?.data || [];

  return (
    <Container sx={{ mt: 3, mb: 3 }}>
      {newsData.map((news) => {
        const hasImage = Boolean(news?.attributes?.images?.data?.length);

        return (
          <Paper
            elevation={5}
            sx={{
              display: "grid",
              p: 3,
              marginBottom: "20px",
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "15px",
              }}
            >
              {hasImage ? (
                <div>
                  <img
                    width="150px"
                    height="150px"
                    src={
                      BACKEND_URI +
                      news?.attributes?.images?.data[0].attributes.url
                    }
                    alt=""
                  />
                </div>
              ) : null}

              <div>
                <Typography>{news?.attributes?.title}</Typography>
                <Divider
                  sx={{
                    borderBottomWidth: "medium",
                    borderColor: "#118C43",
                    borderRadius: "5px",
                  }}
                />
                <Typography>
                  {news?.attributes?.description.substring(0, 400)}
                </Typography>
              </div>
            </Box>
            <Link
              to={"/news/news/" + news?.attributes?.id}
              sx={{ justifySelf: "right" }}
              com
              variant={"outlined"}
            >
              {t("readMore")}...
            </Link>
          </Paper>
        );
      })}
    </Container>
  );
};
export default News;
