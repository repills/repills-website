import React, {useCallback} from 'react'

import BaseLayout from '../../components/layout/Layout'
import Hero from '../../components/hero/Hero'
import PageSection from '../../components/page-section/PageSection'
import { Input, Form, DatePicker, Icon, Button, Select } from 'antd'
import { generateSnippet, FIELD_NAMES, getPullRequestUrl, getFileName } from '../../utils/contribution'

const ContributionForm = ({
  form,
  topics
}) => {
  const { getFieldDecorator } = form;
  const urlRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gi;
  const titleRegex = /^.{6,}$/gi;

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      form.validateFields((err, values) => {
        if (!err) {
          const snippet = generateSnippet(values);
          const url = getPullRequestUrl({
            fileName: getFileName(values, true),
            snippet,
            baseUrl: 'https://github.com/repills/repills-website/', // @TODO add as global
            publishedAt: values.publishedAt,
          });
          window.location =  url;
        }
      });
    },
    [form],
  )

  return (
    <Form onSubmit={onSubmit}>
      <Form.Item label="Link (Include protocol http:// or https://)">
        {
          getFieldDecorator(FIELD_NAMES.LINK, {
            rules: [
              {
                required: true,
                message: 'Please input the resource url',
              },
              {
                pattern: new RegExp(urlRegex),
                message: 'Please input a correct url',
              }
            ],
          })(
            <Input
              size="large"
              addonAfter={<Icon type="link" />}
            />
          )
        }
      </Form.Item>
      <Form.Item label="Title (e.g. the article title or the tool name)">
        {
          getFieldDecorator(FIELD_NAMES.TITLE, {
            rules: [
              {
                required: true,
                message: 'Please input the resource title',
              },
              {
                pattern: new RegExp(titleRegex),
                message: 'Title too much short',
              },
            ],
          })(
            <Input size="large" />
          )
        }
      </Form.Item>
      <Form.Item label="Author (person or company)">
        {
          getFieldDecorator(FIELD_NAMES.AUTHOR, {
            rules: [
              {
                required: true,
                message: 'Please input the resource author',
              },
            ],
          })(
            <Input
              size="large"
            />
          )
        }
      </Form.Item>
      <Form.Item label="Publication date (if it is available)">
        {
          getFieldDecorator(FIELD_NAMES.PUBLISHED_AT)(
            <DatePicker size="large" />
          )
        }
      </Form.Item>
      <Form.Item label="Abstract">
        {
          getFieldDecorator(FIELD_NAMES.ABSTRACT, {
            rules: [
              {
                required: true,
                message: 'Please the abstract',
              },
            ],
          })(
            <Input.TextArea
              size="large"
              rows={5}
            />
          )
        }
      </Form.Item>
      <Form.Item label="Topics">
        {
          getFieldDecorator(FIELD_NAMES.TOPICS, {
            rules: [
              {
                required: true,
                message: 'Please select a topic at least',
              },
            ],
          })(
            <Select
              size="large"
              mode="multiple"
            >
              {
                topics.map((topic) => (
                  <Select.Option key={topic.id}>{topic.title}</Select.Option>
                ))
              }
            </Select>
          )
        }
      </Form.Item>
      <Form.Item label="Contributor github username">
        {
          getFieldDecorator(FIELD_NAMES.SUGGESTED_BY, {
            rules: [
              {
                pattern: new RegExp(titleRegex),
                message: 'Title too much short',
              },
            ],
          })(
            <Input size="large" />
          )
        }
      </Form.Item>
      <Button
        type="primary"
        htmlType="submit"
      >
        Create PR
      </Button>
    </Form>
  )
}

const WrappedForm = Form.create({ name: 'contribution' })(ContributionForm);

const ContributionPage = ({
  pageContext,
}) => {
  const {
    topicsList,
  } = pageContext;
  return (
    <BaseLayout>
      {
        ({WrapperElement}) => (
          <>
            <PageSection
              backgroundColor="primary.basic"
            >
              <WrapperElement>
                <Hero
                  title="Contribution page"
                />
              </WrapperElement>
            </PageSection>
            <PageSection>
              <WrapperElement wrapperMaxWidth={54}>
                <WrappedForm topics={topicsList} />
              </WrapperElement>
            </PageSection>
          </>
        )
      }
    </BaseLayout>
  )
}

export default ContributionPage;
