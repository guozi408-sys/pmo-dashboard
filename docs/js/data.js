window.PMO_DATA = {
  "meta": {
    "project_id": "KEISEI",
    "title": "KEISEI プロジェクト管理ダッシュボード",
    "subtitle": "内部プロジェクト向け Daily PM Workflow",
    "version": "MVP 0.5.3",
    "updated_at": "2026-07-23",
    "method": "acap-methodology-v0.3.2"
  },
  "summary": {
    "current_phase": "要件定義・外部I/F確認",
    "status": "要確認事項を整理中",
    "qa_total": 10,
    "qa_resolved": 1,
    "qa_waiting": 1,
    "artifact_count": 8,
    "artifact_completed": 0,
    "pending_artifact_impacts": 61,
    "review_comments_total": 0,
    "review_comments_pending": 0,
    "pm_action_counts": {
      "decision": 7,
      "overdue": 1,
      "change_candidate": 0,
      "customer_waiting": 8,
      "auto_processed": 0
    }
  },
  "localization": {
    "primary": "ja",
    "secondary": "zh-CN",
    "internal_mode": "switchable",
    "fallback_when_translation_missing": "show_primary_with_marker"
  },
  "ui_labels": {
    "management": {
      "ja": "PM管理",
      "zh-CN": "PM管理"
    },
    "shared": {
      "ja": "プロジェクト共有",
      "zh-CN": "项目共享"
    },
    "language": {
      "ja": "言語",
      "zh-CN": "语言"
    },
    "print": {
      "ja": "印刷",
      "zh-CN": "打印"
    },
    "open_items": {
      "ja": "待办／保留事項（Open Item）",
      "zh-CN": "待办／保留事项（Open Item）"
    },
    "recent_batches": {
      "ja": "最近の処理バッチ",
      "zh-CN": "最近处理批次"
    },
    "decisions": {
      "ja": "決定事項",
      "zh-CN": "决定事项"
    },
    "artifacts_preview": {
      "ja": "成果物・Preview",
      "zh-CN": "成果物与预览"
    },
    "priority_items": {
      "ja": "主要な確認事項／保留事項",
      "zh-CN": "主要确认事项／保留事项"
    },
    "progress": {
      "ja": "プロジェクト全体進捗",
      "zh-CN": "项目整体进度"
    },
    "milestones": {
      "ja": "マイルストーン",
      "zh-CN": "里程碑"
    },
    "artifacts": {
      "ja": "成果物",
      "zh-CN": "成果物"
    },
    "preview": {
      "ja": "Preview",
      "zh-CN": "预览"
    },
    "translation_pending": {
      "ja": "翻訳準備中",
      "zh-CN": "中文翻译准备中，当前显示日文原文"
    }
  },
  "project_facts": [
    {
      "fact_id": "FACT-001",
      "category": "project",
      "statement": "WeChatミニプログラムでSkyliner乗車券購入、決済、顔認証登録を提供し、将来的に座席指定・乗車QRを扱う。",
      "status": "baseline",
      "source_refs": [
        "report/report-data.yaml",
        "MGT-001",
        "REQ-001"
      ]
    },
    {
      "fact_id": "FACT-002",
      "category": "architecture",
      "statement": "NSSの中間サーバーを日本国内のAWSに配置し、HITACHI側システムとの通信を中継する構成を想定する。",
      "status": "confirmed_direction",
      "source_refs": [
        "WB-20260707-MTG"
      ]
    },
    {
      "fact_id": "FACT-003",
      "category": "vendor",
      "statement": "日立製作所が京成電鉄向けAPI連携の実務担当ベンダーとして参画し、実務窓口は林氏。",
      "status": "confirmed",
      "source_refs": [
        "WB-20260707-MTG"
      ]
    },
    {
      "fact_id": "FACT-004",
      "category": "release",
      "statement": "正式リリース日は未確定。現在は1月～2月、遅くとも3月中旬を調整軸とする。",
      "status": "provisional",
      "source_refs": [
        "WB-20260707-MTG"
      ]
    },
    {
      "fact_id": "FACT-005",
      "category": "release",
      "statement": "QRコード対応は2027年3月中旬以降となる見込みで、先行リリース時は顔認証のみとなる可能性がある。",
      "status": "planning_assumption",
      "source_refs": [
        "WB-20260707-MTG"
      ]
    },
    {
      "fact_id": "FACT-006",
      "category": "operations",
      "statement": "顔認証を行わない場合や顔認証エラー時も、購入証明・引換番号を用いた有人窓口対応を維持する想定。",
      "status": "confirmed_direction",
      "source_refs": [
        "WB-20260707-MTG"
      ]
    }
  ],
  "open_items": [
    {
      "item_id": "OPN-001",
      "title": "日立製作所からAPI／I/F仕様書を受領し、正式版を確定する",
      "item_kind": "action",
      "tracking_mode": "execution_required",
      "status": "partially_resolved",
      "owner": "日立製作所",
      "due_date": "2026-07-31",
      "intermediate_due_date": "2026-07-17",
      "latest_update": "SRC-012として2026-07-23にEチケット外部連携API Draftを受領。原計画の2026-07-17現行版目標から遅延して受領したが、認証方式、正式Endpoint/Action、冪等、支払結果回写、Coupon取消・失効、顔認証完了状態取得が未確定のため完全解決ではない。",
      "remaining_point": "正式版仕様書、認証方式、正式Endpoint/Action、エラー詳細、外部注文番号・冪等、支払結果通知、Coupon取消・失効、顔認証完了状態取得方式、およびNSS側QA整理。",
      "completion_condition": "現行版と正式版を受領し、NSS側で確認対象を整理済みであること。",
      "source_refs": [
        {
          "batch_id": "WB-20260707-MTG",
          "section": "前回の課題/todo状況確認",
          "locator": "2"
        },
        {
          "file": "KEISEI のノートブック.pdf",
          "page": 1
        }
      ],
      "legacy_refs": [
        "ACT-003",
        "ACT-005",
        "ACT-007",
        "ISSUE-003",
        "ISSUE-005",
        "ISSUE-007",
        "ISSUE-009",
        "QA-002",
        "RISK-002",
        "RISK-005",
        "RISK-008"
      ],
      "related_topics": [
        "api",
        "external_interface"
      ],
      "artifact_impacts": [
        "API-001",
        "ARC-001",
        "REQ-001",
        "WBS-001",
        "TST-001"
      ],
      "reconciliation": {
        "source_id": "SRC-012",
        "received_at": "2026-07-23",
        "impact": "partially_resolves_existing",
        "before_status": "in_progress",
        "after_status": "partially_resolved",
        "closure_decision": "not_closed",
        "reason": "Draft received, but completion condition requires current and formal specifications plus NSS QA整理.",
        "remaining_candidates": [
          "OPN-017",
          "OPN-018",
          "OPN-012",
          "OPN-013"
        ]
      }
    },
    {
      "item_id": "OPN-002",
      "title": "顔認証登録フロー、責任分界および越境データ取扱いを確定する",
      "item_kind": "issue",
      "tracking_mode": "decision_required",
      "status": "partially_resolved",
      "owner": "京成電鉄 / 日立製作所 / NSS",
      "due_date": null,
      "latest_update": "SRC-012で微信小程序からCoupon登録、微信支付、顔認証リンク遷移、注文履歴状態更新の目標フローと個人情報保護要求を確認。ただし顔認証完了状態の取得方式、複数名の部分完了、責任分界、越境移転・第三者提供の法務確認は未確定。",
      "remaining_point": "顔認証完了状態のCallback/照会方式、複数名の部分完了、各社責任分界、WeChat規約、個人情報・越境通信要件、エラー時運用。",
      "completion_condition": "フロー、データ項目、責任主体、規約・法令制約、例外時運用が合意されること。",
      "source_refs": [
        {
          "batch_id": "WB-20260707-MTG",
          "section": "協議事項詳細",
          "locator": "3,4,6"
        },
        {
          "file": "KEISEI のノートブック.pdf",
          "page": 1
        }
      ],
      "legacy_refs": [
        "ACT-001",
        "RISK-001",
        "ISSUE-006",
        "ISSUE-017",
        "QA-003",
        "QA-007",
        "QA-008",
        "RISK-004",
        "RISK-007",
        "RISK-013",
        "RISK-014",
        "RISK-017"
      ],
      "related_topics": [
        "face_authentication",
        "privacy",
        "cross_border_data",
        "responsibility_boundary"
      ],
      "artifact_impacts": [
        "REQ-001",
        "ARC-001",
        "API-001",
        "SCR-001",
        "TST-001",
        "REL-001"
      ],
      "reconciliation": {
        "source_id": "SRC-012",
        "received_at": "2026-07-23",
        "impact": "updates_existing",
        "before_status": "partially_resolved",
        "after_status": "partially_resolved",
        "closure_decision": "not_closed",
        "new_candidate_refs": [
          "OPN-013",
          "OPN-016",
          "OPN-019"
        ]
      }
    },
    {
      "item_id": "OPN-003",
      "title": "正式なリリース目標と全体スケジュールを確定する",
      "item_kind": "issue",
      "tracking_mode": "decision_required",
      "status": "partially_resolved",
      "owner": "京成電鉄 / NSS / 日立製作所",
      "due_date": null,
      "latest_update": "1月～2月、遅くとも3月中旬を軸に再調整し、要件定義完了後に正式確定する。",
      "remaining_point": "要件定義完了後の正式日程、API提供時期、受入テスト期間との整合。",
      "completion_condition": "関係者合意済みのサービスイン日と主要マイルストーンがWBSに反映されること。",
      "source_refs": [
        {
          "batch_id": "WB-20260707-MTG",
          "section": "前回の課題/todo状況確認 / 決定事項",
          "locator": "3 / 4"
        },
        {
          "file": "KEISEI のノートブック.pdf",
          "page": 1
        }
      ],
      "legacy_refs": [
        "ACT-006",
        "ACT-008",
        "ISSUE-010",
        "ISSUE-023",
        "QA-004",
        "RISK-006",
        "RISK-009"
      ],
      "related_topics": [
        "schedule",
        "release"
      ],
      "artifact_impacts": [
        "MGT-001",
        "WBS-001",
        "TST-001",
        "REL-001"
      ]
    },
    {
      "item_id": "OPN-004",
      "title": "QRコード、顔認証、座席指定のフェーズ分割と正式スコープを確定する",
      "item_kind": "issue",
      "tracking_mode": "decision_required",
      "status": "open",
      "owner": "京成電鉄 / NSS",
      "due_date": null,
      "latest_update": "3月中旬前にリリースする場合は顔認証のみとなる可能性があり、QR有無を分けるか一体化するかを要件定義で検討する。",
      "remaining_point": "Ph.1、Ph.1.1、Ph.2ごとの機能範囲、QR対応時期、追加検証工数。",
      "completion_condition": "各フェーズの対象機能とリリース単位が承認されること。",
      "source_refs": [
        {
          "batch_id": "WB-20260707-MTG",
          "section": "協議事項詳細 / 課題todo",
          "locator": "5 / 3"
        },
        {
          "file": "KEISEI のノートブック.pdf",
          "page": 1
        }
      ],
      "legacy_refs": [
        "ACT-013",
        "ISSUE-019",
        "ISSUE-020",
        "QA-006",
        "RISK-018"
      ],
      "related_topics": [
        "scope",
        "phase",
        "qr",
        "seat"
      ],
      "artifact_impacts": [
        "MGT-001",
        "REQ-001",
        "WBS-001",
        "SCR-001",
        "TST-001",
        "REL-001"
      ]
    },
    {
      "item_id": "OPN-005",
      "title": "キャンセル／返金対応の要否、業務フローおよびシステム影響を確定する",
      "item_kind": "question",
      "tracking_mode": "decision_required",
      "status": "open",
      "owner": "京成電鉄 / NSS",
      "due_date": null,
      "latest_update": "SRC-012のAPI DraftではCoupon取消APIが確認できず、Coupon登録後の未払い・期限切れ・支払失敗時の失効/取消/補償処理が未定義であることを確認。",
      "remaining_point": "Coupon登録後の支払期限、未払い失効、取消可否、返金・キャンセル業務フロー、補償処理、システム影響、スケジュール影響。",
      "completion_condition": "対応要否と採用フローが決定され、対象成果物へ反映方針が定まること。",
      "source_refs": [
        {
          "batch_id": "WB-20260707-MTG",
          "section": "協議事項詳細 / 課題todo",
          "locator": "7 / 4"
        },
        {
          "file": "KEISEI のノートブック.pdf",
          "page": 1
        }
      ],
      "legacy_refs": [
        "ISSUE-001"
      ],
      "related_topics": [
        "refund",
        "cancel"
      ],
      "artifact_impacts": [
        "REQ-001",
        "API-001",
        "WBS-001",
        "TST-001"
      ],
      "reconciliation": {
        "source_id": "SRC-012",
        "received_at": "2026-07-23",
        "impact": "updates_existing",
        "before_status": "open",
        "after_status": "open",
        "closure_decision": "not_closed",
        "new_candidate_refs": [
          "OPN-011",
          "OPN-021"
        ]
      }
    },
    {
      "item_id": "OPN-006",
      "title": "管理画面、非機能要件、セキュリティおよび運用保守範囲を確定する",
      "item_kind": "issue",
      "tracking_mode": "decision_required",
      "status": "open",
      "owner": "NSS / 京成電鉄",
      "due_date": null,
      "latest_update": "SRC-012でHTTPS/TLS、サーバ間認証、ログマスキング、保存時暗号化または同等保護、最小権限、監査ログ、保存期間・削除、テスト環境での実個人情報不使用、データ移転経路確認が必要な統制として提示された。",
      "remaining_point": "利用者・利用目的、必要機能、対応ブラウザ、性能、冗長化、バックアップ、SLO/SLA、運用保守責任、API認証、個人情報保存・削除・越境移転の法務確認。",
      "completion_condition": "主要な非機能・運用要件と責任範囲がレビュー済みであること。",
      "source_refs": [
        {
          "type": "legacy_control",
          "ids": [
            "ISSUE-004",
            "ISSUE-016",
            "ISSUE-018",
            "ACT-012",
            "RISK-015"
          ]
        }
      ],
      "legacy_refs": [
        "ISSUE-004",
        "ISSUE-016",
        "ISSUE-018",
        "ACT-012",
        "RISK-015"
      ],
      "related_topics": [
        "admin",
        "non_functional",
        "security",
        "operations"
      ],
      "artifact_impacts": [
        "REQ-001",
        "ARC-001",
        "SCR-001",
        "TST-001",
        "REL-001"
      ],
      "reconciliation": {
        "source_id": "SRC-012",
        "received_at": "2026-07-23",
        "impact": "supports_existing",
        "before_status": "open",
        "after_status": "open",
        "closure_decision": "not_closed",
        "new_candidate_refs": [
          "OPN-018",
          "OPN-019"
        ]
      }
    },
    {
      "item_id": "OPN-007",
      "title": "プロジェクト体制、意思決定者、各社・社内の担当範囲を確定する",
      "item_kind": "issue",
      "tracking_mode": "decision_required",
      "status": "partially_resolved",
      "owner": "京成電鉄 / NSS",
      "due_date": null,
      "latest_update": "日立製作所が正式なAPI連携ベンダーとして参画し、実務窓口は林氏と確認。その他の意思決定者・社内担当範囲は継続整理。",
      "remaining_point": "京成側意思決定者、確認フロー、NSS内PM・技術・UI/UX・Tech Leadの正式担当。",
      "completion_condition": "体制図と意思決定・確認フローが合意されること。",
      "source_refs": [
        {
          "batch_id": "WB-20260707-MTG",
          "section": "協議事項詳細 / 決定事項",
          "locator": "1 / 1"
        },
        {
          "file": "KEISEI のノートブック.pdf",
          "page": 1
        }
      ],
      "legacy_refs": [
        "ISSUE-002",
        "ISSUE-013",
        "ISSUE-015",
        "ACT-010",
        "RISK-003",
        "RISK-011",
        "RISK-012"
      ],
      "related_topics": [
        "governance",
        "organization"
      ],
      "artifact_impacts": [
        "MGT-001",
        "WBS-001"
      ]
    },
    {
      "item_id": "OPN-008",
      "title": "NDAおよび業務委託契約を締結する",
      "item_kind": "action",
      "tracking_mode": "execution_required",
      "status": "in_progress",
      "owner": "京成電鉄 / NSS",
      "due_date": "2026-07-31",
      "latest_update": "NDA締結前でも提出前提で資料共有可能。業務委託契約は要件定義前の締結方針で、ドラフトを7月中に送付する。",
      "remaining_point": "NDA締結、業務委託契約書ドラフト送付および締結。",
      "completion_condition": "NDAと必要な業務委託契約が締結済みであること。",
      "source_refs": [
        {
          "batch_id": "WB-20260707-MTG",
          "section": "課題todo / 決定事項",
          "locator": "6,7 / 5"
        },
        {
          "file": "KEISEI のノートブック.pdf",
          "page": 1
        }
      ],
      "legacy_refs": [
        "ISSUE-008",
        "DEC-008"
      ],
      "related_topics": [
        "contract",
        "nda"
      ],
      "artifact_impacts": [
        "MGT-001",
        "WBS-001"
      ]
    },
    {
      "item_id": "OPN-009",
      "title": "見積・予算・発注条件を確定する",
      "item_kind": "issue",
      "tracking_mode": "decision_required",
      "status": "open",
      "owner": "京成電鉄 / NSS営業",
      "due_date": null,
      "latest_update": "正式見積は要件定義完了後に提示する方針。",
      "remaining_point": "Ph.1予算対象、2,500万円前提、年度内執行、超過時予算、Go判断・発注条件。",
      "completion_condition": "対象範囲、見積前提、予算・発注条件が承認されること。",
      "source_refs": [
        {
          "batch_id": "WB-20260707-MTG",
          "section": "協議事項詳細 / 決定事項",
          "locator": "10 / 5"
        },
        {
          "file": "KEISEI のノートブック.pdf",
          "page": 1
        }
      ],
      "legacy_refs": [
        "ACT-009",
        "ISSUE-011",
        "ISSUE-012",
        "ISSUE-021",
        "ISSUE-022",
        "QA-005",
        "RISK-010",
        "RISK-016"
      ],
      "related_topics": [
        "budget",
        "estimate",
        "procurement"
      ],
      "artifact_impacts": [
        "MGT-001",
        "WBS-001"
      ]
    },
    {
      "item_id": "OPN-010",
      "title": "要件定義書初版のレビューコメントを回収する",
      "item_kind": "action",
      "tracking_mode": "execution_required",
      "status": "in_progress",
      "owner": "PM",
      "due_date": "2026-07-17",
      "latest_update": null,
      "remaining_point": "レビューコメント回収と反映方針の確定。",
      "completion_condition": "指定レビュアーからコメントを回収し、対応方針を記録すること。",
      "source_refs": [
        {
          "type": "legacy_control",
          "ids": [
            "ACT-002"
          ]
        }
      ],
      "legacy_refs": [
        "ACT-002"
      ],
      "related_topics": [
        "artifact_review"
      ],
      "artifact_impacts": [
        "REQ-001"
      ]
    },
    {
      "item_id": "OPN-011",
      "title": "Coupon登録後の支払期限、失効および取消方式を確定する",
      "item_kind": "question",
      "tracking_mode": "decision_required",
      "status": "candidate",
      "approval_status": "review_required",
      "owner": "京成電鉄 / 日立製作所 / NSS",
      "due_date": null,
      "latest_update": "SRC-012ではCoupon登録成功後の支払期限表示が必要だが、Draft内に未払い・期限切れ時の失効、取消API、取消運用は確認できない。",
      "remaining_point": "支払期限、期限切れ時の予約失効、Coupon取消API有無、取消不可時の運用補償。",
      "completion_condition": "Coupon登録後の未払い・期限切れ・取消の業務/システム処理が承認されること。",
      "source_refs": [
        {
          "source_id": "SRC-012",
          "relation": "new_control_candidate",
          "evidence": "OQ-COUPON-001 / coupon_cancel_api not_found_in_draft",
          "received_at": "2026-07-23"
        }
      ],
      "related_topics": [
        "coupon",
        "payment_expiry",
        "cancel"
      ],
      "artifact_impacts": [
        "REQ-001",
        "API-001",
        "OPS-001"
      ]
    },
    {
      "item_id": "OPN-012",
      "title": "支払結果を顧客Eチケット側へ回写・同期する方式を確定する",
      "item_kind": "question",
      "tracking_mode": "decision_required",
      "status": "candidate",
      "approval_status": "review_required",
      "owner": "京成電鉄 / 日立製作所 / NSS",
      "due_date": null,
      "latest_update": "SRC-012では微信支付成功後に小程序へ購票結果を表示するが、顧客Eチケット側への支払成功通知APIまたは状態更新方式はDraft内で確認できない。",
      "remaining_point": "支払成功/失敗/取消の通知方式、再送、整合性確認、顧客システム側状態更新責任。",
      "completion_condition": "支払結果回写方式と失敗時リカバリがAPI/運用で承認されること。",
      "source_refs": [
        {
          "source_id": "SRC-012",
          "relation": "new_control_candidate",
          "evidence": "OQ-PAYMENT-001 / payment_status_callback not_found_in_draft",
          "received_at": "2026-07-23"
        }
      ],
      "related_topics": [
        "payment",
        "state_sync"
      ],
      "artifact_impacts": [
        "API-001",
        "ARC-001",
        "OPS-001"
      ]
    },
    {
      "item_id": "OPN-013",
      "title": "顔認証完了状態の取得方式と部分完了管理を確定する",
      "item_kind": "question",
      "tracking_mode": "decision_required",
      "status": "candidate",
      "approval_status": "review_required",
      "owner": "京成電鉄 / 顔認証事業者 / NSS",
      "due_date": null,
      "latest_update": "SRC-012では顔認証リンク遷移後に注文履歴を待ちから完了へ更新する必要があるが、Callback、状態照会API、複数名の部分完了取得方式は未確定。",
      "remaining_point": "顔認証完了/失敗/部分完了の取得方式、注文履歴反映タイミング、責任分界。",
      "completion_condition": "顔認証状態取得方式と注文履歴更新条件が承認されること。",
      "source_refs": [
        {
          "source_id": "SRC-012",
          "relation": "new_control_candidate",
          "evidence": "OQ-FACE-STATUS-001",
          "received_at": "2026-07-23"
        }
      ],
      "related_topics": [
        "face_authentication",
        "order_history"
      ],
      "artifact_impacts": [
        "API-001",
        "ARC-001",
        "SCR-001",
        "OPS-001"
      ]
    },
    {
      "item_id": "OPN-014",
      "title": "同一メール・同一微信アカウントによる重複購票と4名超過時の分割購入を確定する",
      "item_kind": "question",
      "tracking_mode": "decision_required",
      "status": "candidate",
      "approval_status": "review_required",
      "owner": "京成電鉄 / NSS",
      "due_date": null,
      "latest_update": "SRC-012で顔認証利用可能人数は最大4名と確認したが、同一利用日・同一メール・同一微信アカウントの複数購入可否、および5名以上の分割注文可否は未確定。",
      "remaining_point": "重複購票可否、5名以上の分割注文ルール、不正/誤購入防止。",
      "completion_condition": "複数購入・分割購入ルールが業務要件とテスト条件に反映可能な粒度で承認されること。",
      "source_refs": [
        {
          "source_id": "SRC-012",
          "relation": "new_control_candidate",
          "evidence": "OQ-MULTIORDER-001 / passenger_limit max_total 4",
          "received_at": "2026-07-23"
        }
      ],
      "related_topics": [
        "duplicate_purchase",
        "passenger_limit"
      ],
      "artifact_impacts": [
        "REQ-001",
        "API-001",
        "TST-001"
      ]
    },
    {
      "item_id": "OPN-015",
      "title": "usernameがない場合の乗客・Coupon・顔認証情報の関連付けを確定する",
      "item_kind": "question",
      "tracking_mode": "decision_required",
      "status": "candidate",
      "approval_status": "review_required",
      "owner": "京成電鉄 / 日立製作所 / NSS",
      "due_date": null,
      "latest_update": "SRC-012のCoupon登録API Draftにはusernameまたは同行者氏名が見当たらず、複数名の顔認証情報を注文/Couponへ関連付ける単位が未確定。",
      "remaining_point": "couponCodeの単位、乗客識別子、複数名注文と顔認証状態の関連付け。",
      "completion_condition": "乗客単位の関連付けキーとCoupon/顔認証状態モデルが承認されること。",
      "source_refs": [
        {
          "source_id": "SRC-012",
          "relation": "new_control_candidate",
          "evidence": "OQ-PASSENGER-001 / OQ-COUPONUNIT-001",
          "received_at": "2026-07-23"
        }
      ],
      "related_topics": [
        "passenger",
        "coupon",
        "data_model"
      ],
      "artifact_impacts": [
        "REQ-001",
        "API-001",
        "DB-001",
        "SCR-001"
      ]
    },
    {
      "item_id": "OPN-016",
      "title": "外部注文番号、冪等キーおよび重複登録判定を確定する",
      "item_kind": "question",
      "tracking_mode": "decision_required",
      "status": "candidate",
      "approval_status": "review_required",
      "owner": "日立製作所 / NSS",
      "due_date": null,
      "latest_update": "SRC-012ではTimeout時は再リクエストとされる一方、外部注文番号、冪等キー、重複登録判定はDraft内で確認できない。",
      "remaining_point": "外部注文番号、冪等キー、再送時の重複予約防止、エラー時照会。",
      "completion_condition": "冪等設計と重複登録時の応答/運用が承認されること。",
      "source_refs": [
        {
          "source_id": "SRC-012",
          "relation": "new_control_candidate",
          "evidence": "OQ-IDEMPOTENCY-001 / idempotency_definition not_found_in_draft",
          "received_at": "2026-07-23"
        }
      ],
      "related_topics": [
        "idempotency",
        "external_order_id"
      ],
      "artifact_impacts": [
        "API-001",
        "DB-001",
        "TST-001"
      ]
    },
    {
      "item_id": "OPN-017",
      "title": "API認証方式、正式Endpointおよび接続制御を確定する",
      "item_kind": "question",
      "tracking_mode": "decision_required",
      "status": "candidate",
      "approval_status": "review_required",
      "owner": "日立製作所 / NSS",
      "due_date": null,
      "latest_update": "SRC-012のDraftでは開発/本番URL候補はあるが、認証方式、正式Action URL、QA/本番区分、Timeout、Retry、Rate Limit、IP制限が未確定。",
      "remaining_point": "API認証、正式Endpoint/Action、接続環境、Timeout/Retry、Rate Limit、IP制限。",
      "completion_condition": "接続仕様が結合試験可能な粒度で承認されること。",
      "source_refs": [
        {
          "source_id": "SRC-012",
          "relation": "new_control_candidate",
          "evidence": "OQ-AUTH-001 / authentication 未確定 / endpoint_action 未確定",
          "received_at": "2026-07-23"
        }
      ],
      "related_topics": [
        "api_authentication",
        "endpoint",
        "connectivity"
      ],
      "artifact_impacts": [
        "API-001",
        "ARC-001",
        "TST-001"
      ]
    },
    {
      "item_id": "OPN-018",
      "title": "個人情報保護、保存期間、第三者提供および越境移転を確定する",
      "item_kind": "question",
      "tracking_mode": "decision_required",
      "status": "candidate",
      "approval_status": "review_required",
      "owner": "京成電鉄 / NSS / 法務",
      "due_date": null,
      "latest_update": "SRC-012でメールアドレス、生年月日、注文情報の組合せを個人情報として管理し、保存期間、削除、ログマスキング、海外移転/第三者提供の法務確認が必要とされた。",
      "remaining_point": "保存国、委託先、第三者提供、越境移転、保存期間、削除、漏えい対応の責任分界。",
      "completion_condition": "個人情報取扱いと法務確認結果が承認されること。",
      "source_refs": [
        {
          "source_id": "SRC-012",
          "relation": "new_control_candidate",
          "evidence": "OQ-PRIVACY-001 / privacy_and_security.required_controls",
          "received_at": "2026-07-23"
        }
      ],
      "related_topics": [
        "privacy",
        "cross_border_data",
        "security"
      ],
      "artifact_impacts": [
        "REQ-001",
        "ARC-001",
        "DB-001",
        "OPS-001"
      ]
    },
    {
      "item_id": "OPN-019",
      "title": "支払金額の算出元とCoupon予約金額・StarPay決済金額の一致性を確定する",
      "item_kind": "question",
      "tracking_mode": "decision_required",
      "status": "candidate",
      "approval_status": "review_required",
      "owner": "京成電鉄 / 日立製作所 / NSS",
      "due_date": null,
      "latest_update": "SRC-012では支払金額を表示して微信支付へ進むが、正式な支払金額の算出主体とCoupon予約金額・StarPay決済金額の一致保証は未確定。",
      "remaining_point": "金額算出主体、端数/通貨、決済金額改ざん防止、予約金額と決済金額の照合。",
      "completion_condition": "金額算出・照合・不一致時処理が承認されること。",
      "source_refs": [
        {
          "source_id": "SRC-012",
          "relation": "new_control_candidate",
          "evidence": "OQ-AMOUNT-001",
          "received_at": "2026-07-23"
        }
      ],
      "related_topics": [
        "payment_amount",
        "reconciliation"
      ],
      "artifact_impacts": [
        "REQ-001",
        "API-001",
        "TST-001"
      ]
    },
    {
      "item_id": "OPN-020",
      "title": "Coupon登録成功後に支払失敗した場合の補償処理を確定する",
      "item_kind": "question",
      "tracking_mode": "decision_required",
      "status": "candidate",
      "approval_status": "review_required",
      "owner": "京成電鉄 / NSS / StarPay",
      "due_date": null,
      "latest_update": "SRC-012でcoupon_registration_failed、payment_failed、payment_expired、payment_cancelledが例外状態候補として提示されたが、Coupon登録成功後の支払失敗時補償処理は未確定。",
      "remaining_point": "支払失敗・期限切れ・取消時のCoupon状態、再決済可否、取消/失効、顧客表示、運用対応。",
      "completion_condition": "支払失敗時の補償処理と顧客通知が承認されること。",
      "source_refs": [
        {
          "source_id": "SRC-012",
          "relation": "new_control_candidate",
          "evidence": "candidate_order_states.exception",
          "received_at": "2026-07-23"
        }
      ],
      "related_topics": [
        "payment_failed",
        "compensation",
        "operations"
      ],
      "artifact_impacts": [
        "REQ-001",
        "API-001",
        "OPS-001"
      ]
    },
    {
      "item_id": "OPN-021",
      "title": "支払結果回写失敗時の顧客システム・小程序・StarPay間の不整合補償を確定する",
      "item_kind": "risk",
      "tracking_mode": "decision_required",
      "status": "candidate",
      "approval_status": "review_required",
      "owner": "京成電鉄 / NSS / StarPay / 日立製作所",
      "due_date": null,
      "latest_update": "SRC-012のRisk候補として、微信支付成功と顧客Eチケット側状態不一致、Coupon登録後の未払い予約残存が提示された。",
      "remaining_point": "支払成功後の同期失敗、未払い予約残存、手動復旧、監視、リトライ、顧客通知。",
      "completion_condition": "不整合検知・補償・復旧手順が承認されること。",
      "source_refs": [
        {
          "source_id": "SRC-012",
          "relation": "new_control_candidate",
          "evidence": "RISK-CAND-PAYMENTSYNC-001 / RISK-CAND-UNPAID-001",
          "received_at": "2026-07-23"
        }
      ],
      "related_topics": [
        "payment_sync",
        "operations",
        "compensation"
      ],
      "artifact_impacts": [
        "API-001",
        "ARC-001",
        "OPS-001"
      ]
    }
  ],
  "qa": [
    {
      "qa_id": "QA-001",
      "question": "課題管理の主システムをBacklogとするか、AI-PMO Dashboardとするか。",
      "status": "deferred_internal",
      "answer": "初期のPMO Dashboardはプロジェクト内部向けの管理・共有基盤として運用する。Backlog等との最終的な主従関係はMVP範囲外。",
      "open_item_ref": null,
      "disposition": "method_admin_backlog",
      "legacy_source": "control/qa-register.yaml"
    },
    {
      "qa_id": "QA-002",
      "question": "日立製作所側I/F仕様書の初版および正式版はいつ提供されるか。",
      "status": "partially_answered",
      "answer": "現行版は2026-07-17目処、正式版は2026-07-31目標。実受領待ち。",
      "open_item_ref": "OPN-001",
      "evidence_ref": "WB-20260707-MTG"
    },
    {
      "qa_id": "QA-003",
      "question": "顔認証、乗車券管理、座席管理等の各社開発範囲と責任分界をどのように確定するか。",
      "status": "partially_answered",
      "answer": "日立製作所がAPI連携ベンダーとして参画し、実務窓口は林氏。詳細責任分界は継続検討。",
      "open_item_ref": "OPN-002",
      "evidence_ref": "WB-20260707-MTG"
    },
    {
      "qa_id": "QA-004",
      "question": "要件定義Fix、各発注、開発完了、サービスインの正式日程はいつか。",
      "status": "partially_answered",
      "answer": "サービスインは1月～2月、遅くとも3月中旬を軸に再調整。要件定義完了後に正式確定。",
      "open_item_ref": "OPN-003",
      "evidence_ref": "WB-20260707-MTG"
    },
    {
      "qa_id": "QA-005",
      "question": "総額2,500万円の予算条件と、超過時の来年度予算扱いは正式な前提か。",
      "status": "unanswered",
      "answer": null,
      "open_item_ref": "OPN-009"
    },
    {
      "qa_id": "QA-006",
      "question": "Ph.1、Ph.1.1、Ph.2の正式な機能範囲とリリース分割をどう確定するか。",
      "status": "partially_answered",
      "answer": "QR対応時期を踏まえ、顔認証のみの先行提供とQR一体リリースのどちらにするかを要件定義で検討。",
      "open_item_ref": "OPN-004",
      "evidence_ref": "WB-20260707-MTG"
    },
    {
      "qa_id": "QA-007",
      "question": "API連携を購入情報I/Fのみに限定する条件は正式決定か。",
      "status": "partially_answered",
      "answer": "購入・決済完了通知と顔登録URL連携を軸とする構成が示されたが、正式なI/F範囲は未確定。",
      "open_item_ref": "OPN-002",
      "evidence_ref": "WB-20260707-MTG"
    },
    {
      "qa_id": "QA-008",
      "question": "エンドユーザーへの顔登録URL連携および決済・チケット情報連携の責任範囲はどこか。",
      "status": "partially_answered",
      "answer": "NSSからHITACHIへ決済完了通知し、応答として顔登録URLを連携する案。詳細責任は継続確認。",
      "open_item_ref": "OPN-002",
      "evidence_ref": "WB-20260707-MTG"
    },
    {
      "qa_id": "QA-009",
      "question": "決済処理をWeChat側で完結させる前提は正式決定か。",
      "status": "partially_answered",
      "answer": "決済はミニプログラム内で完結させる構成イメージが共有された。規約・技術可否を含め継続確認。",
      "open_item_ref": "OPN-002",
      "evidence_ref": "WB-20260707-MTG"
    },
    {
      "qa_id": "QA-010",
      "question": "顔情報・個人情報をWeChatとSR間で直接連携するか。",
      "status": "answered",
      "answer": "画像データそのものをWeChatとSRサーバー間で直接やり取りする想定ではない。",
      "open_item_ref": "OPN-002",
      "evidence_ref": "WB-20260707-MTG"
    }
  ],
  "decisions": [
    {
      "decision_id": "DEC-MTG-001",
      "title": "日立製作所を京成電鉄向けAPI連携の実務担当ベンダーとし、実務窓口を林氏とする。",
      "status": "confirmed",
      "decided_at": "2026-07-07",
      "source_ref": "WB-20260707-MTG",
      "related_open_items": [
        "OPN-007"
      ]
    },
    {
      "decision_id": "DEC-MTG-002",
      "title": "API連携仕様書は現行版を7月17日目処、正式版を7月末目標で提供する。",
      "status": "confirmed_schedule_commitment",
      "decided_at": "2026-07-07",
      "source_ref": "WB-20260707-MTG",
      "related_open_items": [
        "OPN-001"
      ]
    },
    {
      "decision_id": "DEC-MTG-003",
      "title": "顔認証登録は「決済完了通知→顔登録用URL連携」方式を軸に検討する。",
      "status": "provisional",
      "decided_at": "2026-07-07",
      "source_ref": "WB-20260707-MTG",
      "related_open_items": [
        "OPN-002"
      ]
    },
    {
      "decision_id": "DEC-MTG-004",
      "title": "リリース目標は1月～2月、遅くとも3月中旬を軸に再調整し、要件定義完了後に確定する。",
      "status": "provisional",
      "decided_at": "2026-07-07",
      "source_ref": "WB-20260707-MTG",
      "related_open_items": [
        "OPN-003"
      ]
    },
    {
      "decision_id": "DEC-MTG-005",
      "title": "正式見積は要件定義完了後に提示し、NDA締結前でも提出前提の資料共有を可能とする。",
      "status": "confirmed",
      "decided_at": "2026-07-07",
      "source_ref": "WB-20260707-MTG",
      "related_open_items": [
        "OPN-008",
        "OPN-009"
      ]
    }
  ],
  "milestones": [
    {
      "milestone_id": "MS-001",
      "title": "API連携仕様書（現行版）受領",
      "target_date": "2026-07-17",
      "status": "in_progress",
      "certainty": "committed_target",
      "related_open_item": "OPN-001"
    },
    {
      "milestone_id": "MS-002",
      "title": "API連携仕様書（正式版）受領",
      "target_date": "2026-07-31",
      "status": "in_progress",
      "certainty": "target",
      "related_open_item": "OPN-001"
    },
    {
      "milestone_id": "MS-003",
      "title": "要件定義完了",
      "target_date": null,
      "status": "open",
      "certainty": "tbd",
      "related_open_items": [
        "OPN-003",
        "OPN-004",
        "OPN-006"
      ]
    },
    {
      "milestone_id": "MS-004",
      "title": "サービスイン",
      "target_window": "2027-01〜2027-02（最遅2027-03中旬）",
      "status": "provisional",
      "certainty": "planning_window",
      "related_open_item": "OPN-003"
    }
  ],
  "artifacts": [
    {
      "artifact_id": "MGT-001",
      "title": "プロジェクト計画書",
      "category": "00_management",
      "status": "review_required",
      "version": "v0.2",
      "owner": "PMO",
      "file_path": "artifacts/00_management/MGT-001.md",
      "preview_path": "previews/artifacts/MGT-001.html",
      "preview_paths": {
        "ja": "previews/artifacts/ja/MGT-001.html",
        "zh-CN": "previews/artifacts/zh-CN/MGT-001.html",
        "default": "previews/artifacts/MGT-001.html"
      },
      "translation_status": "complete",
      "history_versions": [
        {
          "version": "v0.1",
          "path": "artifacts/_history/MGT-001/MGT-001_v0.1.md"
        }
      ],
      "impact_count": 5,
      "review_comment_count": 0,
      "pending_review_comment_count": 0,
      "open_qa_count": 0
    },
    {
      "artifact_id": "WBS-001",
      "title": "WBS / スケジュール",
      "category": "00_管理",
      "status": "review_required",
      "version": "v0.2",
      "owner": "PM",
      "file_path": "artifacts/00_management/WBS-001.md",
      "preview_path": "previews/artifacts/WBS-001.html",
      "preview_paths": {
        "ja": "previews/artifacts/ja/WBS-001.html",
        "zh-CN": "previews/artifacts/zh-CN/WBS-001.html",
        "default": "previews/artifacts/WBS-001.html"
      },
      "translation_status": "complete",
      "history_versions": [
        {
          "version": "v0.1",
          "path": "artifacts/_history/WBS-001/WBS-001_v0.1.md"
        }
      ],
      "impact_count": 7,
      "review_comment_count": 0,
      "pending_review_comment_count": 0,
      "open_qa_count": 0
    },
    {
      "artifact_id": "REQ-001",
      "title": "要件定義書",
      "category": "10_requirements",
      "status": "review_required",
      "version": "v0.2",
      "owner": "PM",
      "file_path": "artifacts/10_requirements/REQ-001.md",
      "preview_path": "previews/artifacts/REQ-001.html",
      "preview_paths": {
        "ja": "previews/artifacts/ja/REQ-001.html",
        "zh-CN": "previews/artifacts/zh-CN/REQ-001.html",
        "default": "previews/artifacts/REQ-001.html"
      },
      "translation_status": "complete",
      "history_versions": [
        {
          "version": "v0.1",
          "path": "artifacts/_history/REQ-001/REQ-001_v0.1.md"
        }
      ],
      "impact_count": 9,
      "review_comment_count": 0,
      "pending_review_comment_count": 0,
      "open_qa_count": 0
    },
    {
      "artifact_id": "SCR-001",
      "title": "画面・帳票設計書",
      "category": "10_要件定義",
      "status": "review_required",
      "version": "v0.2",
      "owner": "PM",
      "file_path": "artifacts/10_requirements/SCR-001.md",
      "preview_path": "previews/artifacts/SCR-001.html",
      "preview_paths": {
        "ja": "previews/artifacts/SCR-001.html",
        "zh-CN": "previews/artifacts/SCR-001.html",
        "default": "previews/artifacts/SCR-001.html"
      },
      "translation_status": "complete",
      "history_versions": [
        {
          "version": "v0.1",
          "path": "artifacts/_history/SCR-001/SCR-001_v0.1.md"
        }
      ],
      "impact_count": 4,
      "review_comment_count": 0,
      "pending_review_comment_count": 0,
      "open_qa_count": 0
    },
    {
      "artifact_id": "ARC-001",
      "title": "システム構成定義",
      "category": "20_design",
      "status": "review_required",
      "version": "v0.2",
      "owner": "Tech Lead",
      "file_path": "artifacts/20_design/ARC-001.md",
      "preview_path": "previews/artifacts/ARC-001.html",
      "preview_paths": {
        "ja": "previews/artifacts/ja/ARC-001.html",
        "zh-CN": "previews/artifacts/zh-CN/ARC-001.html",
        "default": "previews/artifacts/ARC-001.html"
      },
      "translation_status": "complete",
      "history_versions": [
        {
          "version": "v0.1",
          "path": "artifacts/_history/ARC-001/ARC-001_v0.1.md"
        }
      ],
      "impact_count": 6,
      "review_comment_count": 0,
      "pending_review_comment_count": 0,
      "open_qa_count": 0
    },
    {
      "artifact_id": "API-001",
      "title": "API確認表",
      "category": "20_design",
      "status": "review_required",
      "version": "v0.2",
      "owner": "Tech Lead",
      "file_path": "artifacts/20_design/API-001.md",
      "preview_path": "previews/artifacts/API-001.html",
      "preview_paths": {
        "ja": "previews/artifacts/ja/API-001.html",
        "zh-CN": "previews/artifacts/zh-CN/API-001.html",
        "default": "previews/artifacts/API-001.html"
      },
      "translation_status": "complete",
      "history_versions": [
        {
          "version": "v0.1",
          "path": "artifacts/_history/API-001/API-001_v0.1.md"
        }
      ],
      "impact_count": 12,
      "review_comment_count": 0,
      "pending_review_comment_count": 0,
      "open_qa_count": 0
    },
    {
      "artifact_id": "TST-001",
      "title": "テスト計画",
      "category": "50_テスト",
      "status": "review_required",
      "version": "v0.2",
      "owner": "QA Lead",
      "file_path": "artifacts/50_test/TST-001.md",
      "preview_path": "previews/artifacts/TST-001.html",
      "preview_paths": {
        "ja": "previews/artifacts/ja/TST-001.html",
        "zh-CN": "previews/artifacts/zh-CN/TST-001.html",
        "default": "previews/artifacts/TST-001.html"
      },
      "translation_status": "complete",
      "history_versions": [
        {
          "version": "v0.1",
          "path": "artifacts/_history/TST-001/TST-001_v0.1.md"
        }
      ],
      "impact_count": 9,
      "review_comment_count": 0,
      "pending_review_comment_count": 0,
      "open_qa_count": 0
    },
    {
      "artifact_id": "REL-001",
      "title": "リリース計画",
      "category": "60_リリース",
      "status": "review_required",
      "version": "v0.2",
      "owner": "PM",
      "file_path": "artifacts/60_release/REL-001.md",
      "preview_path": "previews/artifacts/REL-001.html",
      "preview_paths": {
        "ja": "previews/artifacts/ja/REL-001.html",
        "zh-CN": "previews/artifacts/zh-CN/REL-001.html",
        "default": "previews/artifacts/REL-001.html"
      },
      "translation_status": "complete",
      "history_versions": [
        {
          "version": "v0.1",
          "path": "artifacts/_history/REL-001/REL-001_v0.1.md"
        }
      ],
      "impact_count": 4,
      "review_comment_count": 0,
      "pending_review_comment_count": 0,
      "open_qa_count": 0
    }
  ],
  "artifact_impacts": [
    {
      "impact_id": "IMP-OPN-001-API-001",
      "source_item": "OPN-001",
      "affected_artifact": "API-001",
      "reason": "日立製作所からAPI／I/F仕様書を受領し、正式版を確定する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-001-ARC-001",
      "source_item": "OPN-001",
      "affected_artifact": "ARC-001",
      "reason": "日立製作所からAPI／I/F仕様書を受領し、正式版を確定する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-001-REQ-001",
      "source_item": "OPN-001",
      "affected_artifact": "REQ-001",
      "reason": "日立製作所からAPI／I/F仕様書を受領し、正式版を確定する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-001-WBS-001",
      "source_item": "OPN-001",
      "affected_artifact": "WBS-001",
      "reason": "日立製作所からAPI／I/F仕様書を受領し、正式版を確定する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-001-TST-001",
      "source_item": "OPN-001",
      "affected_artifact": "TST-001",
      "reason": "日立製作所からAPI／I/F仕様書を受領し、正式版を確定する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-002-REQ-001",
      "source_item": "OPN-002",
      "affected_artifact": "REQ-001",
      "reason": "顔認証登録フロー、責任分界および越境データ取扱いを確定する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-002-ARC-001",
      "source_item": "OPN-002",
      "affected_artifact": "ARC-001",
      "reason": "顔認証登録フロー、責任分界および越境データ取扱いを確定する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-002-API-001",
      "source_item": "OPN-002",
      "affected_artifact": "API-001",
      "reason": "顔認証登録フロー、責任分界および越境データ取扱いを確定する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-002-SCR-001",
      "source_item": "OPN-002",
      "affected_artifact": "SCR-001",
      "reason": "顔認証登録フロー、責任分界および越境データ取扱いを確定する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-002-TST-001",
      "source_item": "OPN-002",
      "affected_artifact": "TST-001",
      "reason": "顔認証登録フロー、責任分界および越境データ取扱いを確定する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-002-REL-001",
      "source_item": "OPN-002",
      "affected_artifact": "REL-001",
      "reason": "顔認証登録フロー、責任分界および越境データ取扱いを確定する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-003-MGT-001",
      "source_item": "OPN-003",
      "affected_artifact": "MGT-001",
      "reason": "正式なリリース目標と全体スケジュールを確定する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-003-WBS-001",
      "source_item": "OPN-003",
      "affected_artifact": "WBS-001",
      "reason": "正式なリリース目標と全体スケジュールを確定する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-003-TST-001",
      "source_item": "OPN-003",
      "affected_artifact": "TST-001",
      "reason": "正式なリリース目標と全体スケジュールを確定する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-003-REL-001",
      "source_item": "OPN-003",
      "affected_artifact": "REL-001",
      "reason": "正式なリリース目標と全体スケジュールを確定する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-004-MGT-001",
      "source_item": "OPN-004",
      "affected_artifact": "MGT-001",
      "reason": "QRコード、顔認証、座席指定のフェーズ分割と正式スコープを確定する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-004-REQ-001",
      "source_item": "OPN-004",
      "affected_artifact": "REQ-001",
      "reason": "QRコード、顔認証、座席指定のフェーズ分割と正式スコープを確定する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-004-WBS-001",
      "source_item": "OPN-004",
      "affected_artifact": "WBS-001",
      "reason": "QRコード、顔認証、座席指定のフェーズ分割と正式スコープを確定する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-004-SCR-001",
      "source_item": "OPN-004",
      "affected_artifact": "SCR-001",
      "reason": "QRコード、顔認証、座席指定のフェーズ分割と正式スコープを確定する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-004-TST-001",
      "source_item": "OPN-004",
      "affected_artifact": "TST-001",
      "reason": "QRコード、顔認証、座席指定のフェーズ分割と正式スコープを確定する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-004-REL-001",
      "source_item": "OPN-004",
      "affected_artifact": "REL-001",
      "reason": "QRコード、顔認証、座席指定のフェーズ分割と正式スコープを確定する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-005-REQ-001",
      "source_item": "OPN-005",
      "affected_artifact": "REQ-001",
      "reason": "キャンセル／返金対応の要否、業務フローおよびシステム影響を確定する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-005-API-001",
      "source_item": "OPN-005",
      "affected_artifact": "API-001",
      "reason": "キャンセル／返金対応の要否、業務フローおよびシステム影響を確定する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-005-WBS-001",
      "source_item": "OPN-005",
      "affected_artifact": "WBS-001",
      "reason": "キャンセル／返金対応の要否、業務フローおよびシステム影響を確定する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-005-TST-001",
      "source_item": "OPN-005",
      "affected_artifact": "TST-001",
      "reason": "キャンセル／返金対応の要否、業務フローおよびシステム影響を確定する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-006-REQ-001",
      "source_item": "OPN-006",
      "affected_artifact": "REQ-001",
      "reason": "管理画面、非機能要件、セキュリティおよび運用保守範囲を確定する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-006-ARC-001",
      "source_item": "OPN-006",
      "affected_artifact": "ARC-001",
      "reason": "管理画面、非機能要件、セキュリティおよび運用保守範囲を確定する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-006-SCR-001",
      "source_item": "OPN-006",
      "affected_artifact": "SCR-001",
      "reason": "管理画面、非機能要件、セキュリティおよび運用保守範囲を確定する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-006-TST-001",
      "source_item": "OPN-006",
      "affected_artifact": "TST-001",
      "reason": "管理画面、非機能要件、セキュリティおよび運用保守範囲を確定する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-006-REL-001",
      "source_item": "OPN-006",
      "affected_artifact": "REL-001",
      "reason": "管理画面、非機能要件、セキュリティおよび運用保守範囲を確定する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-007-MGT-001",
      "source_item": "OPN-007",
      "affected_artifact": "MGT-001",
      "reason": "プロジェクト体制、意思決定者、各社・社内の担当範囲を確定する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-007-WBS-001",
      "source_item": "OPN-007",
      "affected_artifact": "WBS-001",
      "reason": "プロジェクト体制、意思決定者、各社・社内の担当範囲を確定する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-008-MGT-001",
      "source_item": "OPN-008",
      "affected_artifact": "MGT-001",
      "reason": "NDAおよび業務委託契約を締結する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-008-WBS-001",
      "source_item": "OPN-008",
      "affected_artifact": "WBS-001",
      "reason": "NDAおよび業務委託契約を締結する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-009-MGT-001",
      "source_item": "OPN-009",
      "affected_artifact": "MGT-001",
      "reason": "見積・予算・発注条件を確定する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-009-WBS-001",
      "source_item": "OPN-009",
      "affected_artifact": "WBS-001",
      "reason": "見積・予算・発注条件を確定する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-OPN-010-REQ-001",
      "source_item": "OPN-010",
      "affected_artifact": "REQ-001",
      "reason": "要件定義書初版のレビューコメントを回収する",
      "status": "pending_revision"
    },
    {
      "impact_id": "IMP-SRC-012-OPN-001-API-001",
      "source_item": "OPN-001",
      "source_id": "SRC-012",
      "affected_artifact": "API-001",
      "reason": "API Draftを受領したが認証・Endpoint・冪等・支払回写等が未確定",
      "status": "candidate_review_required"
    },
    {
      "impact_id": "IMP-SRC-012-OPN-001-REQ-001",
      "source_item": "OPN-001",
      "source_id": "SRC-012",
      "affected_artifact": "REQ-001",
      "reason": "現行版Draft受領により購票フロー・未確定項目の整理が必要",
      "status": "candidate_review_required"
    },
    {
      "impact_id": "IMP-SRC-012-OPN-011-API-001",
      "source_item": "OPN-011",
      "source_id": "SRC-012",
      "affected_artifact": "API-001",
      "reason": "Coupon登録後の支払期限・失効・取消方式の確認候補",
      "status": "candidate_review_required"
    },
    {
      "impact_id": "IMP-SRC-012-OPN-011-OPS-001",
      "source_item": "OPN-011",
      "source_id": "SRC-012",
      "affected_artifact": "OPS-001",
      "reason": "未払い予約失効・取消運用の確認候補",
      "status": "candidate_review_required"
    },
    {
      "impact_id": "IMP-SRC-012-OPN-012-API-001",
      "source_item": "OPN-012",
      "source_id": "SRC-012",
      "affected_artifact": "API-001",
      "reason": "支払結果回写方式の確認候補",
      "status": "candidate_review_required"
    },
    {
      "impact_id": "IMP-SRC-012-OPN-012-ARC-001",
      "source_item": "OPN-012",
      "source_id": "SRC-012",
      "affected_artifact": "ARC-001",
      "reason": "支払成功状態同期アーキテクチャの確認候補",
      "status": "candidate_review_required"
    },
    {
      "impact_id": "IMP-SRC-012-OPN-013-SCR-001",
      "source_item": "OPN-013",
      "source_id": "SRC-012",
      "affected_artifact": "SCR-001",
      "reason": "顔認証完了状態の表示・注文履歴反映候補",
      "status": "candidate_review_required"
    },
    {
      "impact_id": "IMP-SRC-012-OPN-013-API-001",
      "source_item": "OPN-013",
      "source_id": "SRC-012",
      "affected_artifact": "API-001",
      "reason": "顔認証完了状態取得方式の確認候補",
      "status": "candidate_review_required"
    },
    {
      "impact_id": "IMP-SRC-012-OPN-014-REQ-001",
      "source_item": "OPN-014",
      "source_id": "SRC-012",
      "affected_artifact": "REQ-001",
      "reason": "同一メール・微信アカウント重複購票と4名超過分割購入の確認候補",
      "status": "candidate_review_required"
    },
    {
      "impact_id": "IMP-SRC-012-OPN-014-TST-001",
      "source_item": "OPN-014",
      "source_id": "SRC-012",
      "affected_artifact": "TST-001",
      "reason": "重複購票・分割購入テスト条件の確認候補",
      "status": "candidate_review_required"
    },
    {
      "impact_id": "IMP-SRC-012-OPN-015-DB-001",
      "source_item": "OPN-015",
      "source_id": "SRC-012",
      "affected_artifact": "DB-001",
      "reason": "乗客・Coupon・顔認証情報の関連付け候補",
      "status": "candidate_review_required"
    },
    {
      "impact_id": "IMP-SRC-012-OPN-015-API-001",
      "source_item": "OPN-015",
      "source_id": "SRC-012",
      "affected_artifact": "API-001",
      "reason": "usernameなしの乗客関連付け確認候補",
      "status": "candidate_review_required"
    },
    {
      "impact_id": "IMP-SRC-012-OPN-016-API-001",
      "source_item": "OPN-016",
      "source_id": "SRC-012",
      "affected_artifact": "API-001",
      "reason": "外部注文番号・冪等キー・重複登録判定の確認候補",
      "status": "candidate_review_required"
    },
    {
      "impact_id": "IMP-SRC-012-OPN-016-TST-001",
      "source_item": "OPN-016",
      "source_id": "SRC-012",
      "affected_artifact": "TST-001",
      "reason": "再送・重複登録テスト条件の確認候補",
      "status": "candidate_review_required"
    },
    {
      "impact_id": "IMP-SRC-012-OPN-017-API-001",
      "source_item": "OPN-017",
      "source_id": "SRC-012",
      "affected_artifact": "API-001",
      "reason": "API認証・正式Endpoint・接続制御の確認候補",
      "status": "candidate_review_required"
    },
    {
      "impact_id": "IMP-SRC-012-OPN-017-ARC-001",
      "source_item": "OPN-017",
      "source_id": "SRC-012",
      "affected_artifact": "ARC-001",
      "reason": "接続環境・認証設計の確認候補",
      "status": "candidate_review_required"
    },
    {
      "impact_id": "IMP-SRC-012-OPN-018-REQ-001",
      "source_item": "OPN-018",
      "source_id": "SRC-012",
      "affected_artifact": "REQ-001",
      "reason": "個人情報保護・保存・越境移転の確認候補",
      "status": "candidate_review_required"
    },
    {
      "impact_id": "IMP-SRC-012-OPN-018-DB-001",
      "source_item": "OPN-018",
      "source_id": "SRC-012",
      "affected_artifact": "DB-001",
      "reason": "個人情報保存・削除・暗号化の確認候補",
      "status": "candidate_review_required"
    },
    {
      "impact_id": "IMP-SRC-012-OPN-019-API-001",
      "source_item": "OPN-019",
      "source_id": "SRC-012",
      "affected_artifact": "API-001",
      "reason": "支払金額算出元・金額一致性の確認候補",
      "status": "candidate_review_required"
    },
    {
      "impact_id": "IMP-SRC-012-OPN-019-TST-001",
      "source_item": "OPN-019",
      "source_id": "SRC-012",
      "affected_artifact": "TST-001",
      "reason": "支払金額一致性テスト条件の確認候補",
      "status": "candidate_review_required"
    },
    {
      "impact_id": "IMP-SRC-012-OPN-020-OPS-001",
      "source_item": "OPN-020",
      "source_id": "SRC-012",
      "affected_artifact": "OPS-001",
      "reason": "Coupon登録成功後の支払失敗補償処理候補",
      "status": "candidate_review_required"
    },
    {
      "impact_id": "IMP-SRC-012-OPN-020-API-001",
      "source_item": "OPN-020",
      "source_id": "SRC-012",
      "affected_artifact": "API-001",
      "reason": "支払失敗・期限切れ・取消時API状態候補",
      "status": "candidate_review_required"
    },
    {
      "impact_id": "IMP-SRC-012-OPN-021-OPS-001",
      "source_item": "OPN-021",
      "source_id": "SRC-012",
      "affected_artifact": "OPS-001",
      "reason": "支払回写失敗時の不整合補償・復旧候補",
      "status": "candidate_review_required"
    },
    {
      "impact_id": "IMP-SRC-012-OPN-021-ARC-001",
      "source_item": "OPN-021",
      "source_id": "SRC-012",
      "affected_artifact": "ARC-001",
      "reason": "StarPay・小程序・顧客Eチケット間の状態不整合補償候補",
      "status": "candidate_review_required"
    }
  ],
  "control_candidates": [
    {
      "item_id": "OPN-011",
      "title": "Coupon登録後の支払期限、失効および取消方式を確定する",
      "item_kind": "question",
      "tracking_mode": "decision_required",
      "status": "candidate",
      "approval_status": "review_required",
      "owner": "京成電鉄 / 日立製作所 / NSS",
      "due_date": null,
      "latest_update": "SRC-012ではCoupon登録成功後の支払期限表示が必要だが、Draft内に未払い・期限切れ時の失効、取消API、取消運用は確認できない。",
      "remaining_point": "支払期限、期限切れ時の予約失効、Coupon取消API有無、取消不可時の運用補償。",
      "completion_condition": "Coupon登録後の未払い・期限切れ・取消の業務/システム処理が承認されること。",
      "source_refs": [
        {
          "source_id": "SRC-012",
          "relation": "new_control_candidate",
          "evidence": "OQ-COUPON-001 / coupon_cancel_api not_found_in_draft",
          "received_at": "2026-07-23"
        }
      ],
      "related_topics": [
        "coupon",
        "payment_expiry",
        "cancel"
      ],
      "artifact_impacts": [
        "REQ-001",
        "API-001",
        "OPS-001"
      ]
    },
    {
      "item_id": "OPN-012",
      "title": "支払結果を顧客Eチケット側へ回写・同期する方式を確定する",
      "item_kind": "question",
      "tracking_mode": "decision_required",
      "status": "candidate",
      "approval_status": "review_required",
      "owner": "京成電鉄 / 日立製作所 / NSS",
      "due_date": null,
      "latest_update": "SRC-012では微信支付成功後に小程序へ購票結果を表示するが、顧客Eチケット側への支払成功通知APIまたは状態更新方式はDraft内で確認できない。",
      "remaining_point": "支払成功/失敗/取消の通知方式、再送、整合性確認、顧客システム側状態更新責任。",
      "completion_condition": "支払結果回写方式と失敗時リカバリがAPI/運用で承認されること。",
      "source_refs": [
        {
          "source_id": "SRC-012",
          "relation": "new_control_candidate",
          "evidence": "OQ-PAYMENT-001 / payment_status_callback not_found_in_draft",
          "received_at": "2026-07-23"
        }
      ],
      "related_topics": [
        "payment",
        "state_sync"
      ],
      "artifact_impacts": [
        "API-001",
        "ARC-001",
        "OPS-001"
      ]
    },
    {
      "item_id": "OPN-013",
      "title": "顔認証完了状態の取得方式と部分完了管理を確定する",
      "item_kind": "question",
      "tracking_mode": "decision_required",
      "status": "candidate",
      "approval_status": "review_required",
      "owner": "京成電鉄 / 顔認証事業者 / NSS",
      "due_date": null,
      "latest_update": "SRC-012では顔認証リンク遷移後に注文履歴を待ちから完了へ更新する必要があるが、Callback、状態照会API、複数名の部分完了取得方式は未確定。",
      "remaining_point": "顔認証完了/失敗/部分完了の取得方式、注文履歴反映タイミング、責任分界。",
      "completion_condition": "顔認証状態取得方式と注文履歴更新条件が承認されること。",
      "source_refs": [
        {
          "source_id": "SRC-012",
          "relation": "new_control_candidate",
          "evidence": "OQ-FACE-STATUS-001",
          "received_at": "2026-07-23"
        }
      ],
      "related_topics": [
        "face_authentication",
        "order_history"
      ],
      "artifact_impacts": [
        "API-001",
        "ARC-001",
        "SCR-001",
        "OPS-001"
      ]
    },
    {
      "item_id": "OPN-014",
      "title": "同一メール・同一微信アカウントによる重複購票と4名超過時の分割購入を確定する",
      "item_kind": "question",
      "tracking_mode": "decision_required",
      "status": "candidate",
      "approval_status": "review_required",
      "owner": "京成電鉄 / NSS",
      "due_date": null,
      "latest_update": "SRC-012で顔認証利用可能人数は最大4名と確認したが、同一利用日・同一メール・同一微信アカウントの複数購入可否、および5名以上の分割注文可否は未確定。",
      "remaining_point": "重複購票可否、5名以上の分割注文ルール、不正/誤購入防止。",
      "completion_condition": "複数購入・分割購入ルールが業務要件とテスト条件に反映可能な粒度で承認されること。",
      "source_refs": [
        {
          "source_id": "SRC-012",
          "relation": "new_control_candidate",
          "evidence": "OQ-MULTIORDER-001 / passenger_limit max_total 4",
          "received_at": "2026-07-23"
        }
      ],
      "related_topics": [
        "duplicate_purchase",
        "passenger_limit"
      ],
      "artifact_impacts": [
        "REQ-001",
        "API-001",
        "TST-001"
      ]
    },
    {
      "item_id": "OPN-015",
      "title": "usernameがない場合の乗客・Coupon・顔認証情報の関連付けを確定する",
      "item_kind": "question",
      "tracking_mode": "decision_required",
      "status": "candidate",
      "approval_status": "review_required",
      "owner": "京成電鉄 / 日立製作所 / NSS",
      "due_date": null,
      "latest_update": "SRC-012のCoupon登録API Draftにはusernameまたは同行者氏名が見当たらず、複数名の顔認証情報を注文/Couponへ関連付ける単位が未確定。",
      "remaining_point": "couponCodeの単位、乗客識別子、複数名注文と顔認証状態の関連付け。",
      "completion_condition": "乗客単位の関連付けキーとCoupon/顔認証状態モデルが承認されること。",
      "source_refs": [
        {
          "source_id": "SRC-012",
          "relation": "new_control_candidate",
          "evidence": "OQ-PASSENGER-001 / OQ-COUPONUNIT-001",
          "received_at": "2026-07-23"
        }
      ],
      "related_topics": [
        "passenger",
        "coupon",
        "data_model"
      ],
      "artifact_impacts": [
        "REQ-001",
        "API-001",
        "DB-001",
        "SCR-001"
      ]
    },
    {
      "item_id": "OPN-016",
      "title": "外部注文番号、冪等キーおよび重複登録判定を確定する",
      "item_kind": "question",
      "tracking_mode": "decision_required",
      "status": "candidate",
      "approval_status": "review_required",
      "owner": "日立製作所 / NSS",
      "due_date": null,
      "latest_update": "SRC-012ではTimeout時は再リクエストとされる一方、外部注文番号、冪等キー、重複登録判定はDraft内で確認できない。",
      "remaining_point": "外部注文番号、冪等キー、再送時の重複予約防止、エラー時照会。",
      "completion_condition": "冪等設計と重複登録時の応答/運用が承認されること。",
      "source_refs": [
        {
          "source_id": "SRC-012",
          "relation": "new_control_candidate",
          "evidence": "OQ-IDEMPOTENCY-001 / idempotency_definition not_found_in_draft",
          "received_at": "2026-07-23"
        }
      ],
      "related_topics": [
        "idempotency",
        "external_order_id"
      ],
      "artifact_impacts": [
        "API-001",
        "DB-001",
        "TST-001"
      ]
    },
    {
      "item_id": "OPN-017",
      "title": "API認証方式、正式Endpointおよび接続制御を確定する",
      "item_kind": "question",
      "tracking_mode": "decision_required",
      "status": "candidate",
      "approval_status": "review_required",
      "owner": "日立製作所 / NSS",
      "due_date": null,
      "latest_update": "SRC-012のDraftでは開発/本番URL候補はあるが、認証方式、正式Action URL、QA/本番区分、Timeout、Retry、Rate Limit、IP制限が未確定。",
      "remaining_point": "API認証、正式Endpoint/Action、接続環境、Timeout/Retry、Rate Limit、IP制限。",
      "completion_condition": "接続仕様が結合試験可能な粒度で承認されること。",
      "source_refs": [
        {
          "source_id": "SRC-012",
          "relation": "new_control_candidate",
          "evidence": "OQ-AUTH-001 / authentication 未確定 / endpoint_action 未確定",
          "received_at": "2026-07-23"
        }
      ],
      "related_topics": [
        "api_authentication",
        "endpoint",
        "connectivity"
      ],
      "artifact_impacts": [
        "API-001",
        "ARC-001",
        "TST-001"
      ]
    },
    {
      "item_id": "OPN-018",
      "title": "個人情報保護、保存期間、第三者提供および越境移転を確定する",
      "item_kind": "question",
      "tracking_mode": "decision_required",
      "status": "candidate",
      "approval_status": "review_required",
      "owner": "京成電鉄 / NSS / 法務",
      "due_date": null,
      "latest_update": "SRC-012でメールアドレス、生年月日、注文情報の組合せを個人情報として管理し、保存期間、削除、ログマスキング、海外移転/第三者提供の法務確認が必要とされた。",
      "remaining_point": "保存国、委託先、第三者提供、越境移転、保存期間、削除、漏えい対応の責任分界。",
      "completion_condition": "個人情報取扱いと法務確認結果が承認されること。",
      "source_refs": [
        {
          "source_id": "SRC-012",
          "relation": "new_control_candidate",
          "evidence": "OQ-PRIVACY-001 / privacy_and_security.required_controls",
          "received_at": "2026-07-23"
        }
      ],
      "related_topics": [
        "privacy",
        "cross_border_data",
        "security"
      ],
      "artifact_impacts": [
        "REQ-001",
        "ARC-001",
        "DB-001",
        "OPS-001"
      ]
    },
    {
      "item_id": "OPN-019",
      "title": "支払金額の算出元とCoupon予約金額・StarPay決済金額の一致性を確定する",
      "item_kind": "question",
      "tracking_mode": "decision_required",
      "status": "candidate",
      "approval_status": "review_required",
      "owner": "京成電鉄 / 日立製作所 / NSS",
      "due_date": null,
      "latest_update": "SRC-012では支払金額を表示して微信支付へ進むが、正式な支払金額の算出主体とCoupon予約金額・StarPay決済金額の一致保証は未確定。",
      "remaining_point": "金額算出主体、端数/通貨、決済金額改ざん防止、予約金額と決済金額の照合。",
      "completion_condition": "金額算出・照合・不一致時処理が承認されること。",
      "source_refs": [
        {
          "source_id": "SRC-012",
          "relation": "new_control_candidate",
          "evidence": "OQ-AMOUNT-001",
          "received_at": "2026-07-23"
        }
      ],
      "related_topics": [
        "payment_amount",
        "reconciliation"
      ],
      "artifact_impacts": [
        "REQ-001",
        "API-001",
        "TST-001"
      ]
    },
    {
      "item_id": "OPN-020",
      "title": "Coupon登録成功後に支払失敗した場合の補償処理を確定する",
      "item_kind": "question",
      "tracking_mode": "decision_required",
      "status": "candidate",
      "approval_status": "review_required",
      "owner": "京成電鉄 / NSS / StarPay",
      "due_date": null,
      "latest_update": "SRC-012でcoupon_registration_failed、payment_failed、payment_expired、payment_cancelledが例外状態候補として提示されたが、Coupon登録成功後の支払失敗時補償処理は未確定。",
      "remaining_point": "支払失敗・期限切れ・取消時のCoupon状態、再決済可否、取消/失効、顧客表示、運用対応。",
      "completion_condition": "支払失敗時の補償処理と顧客通知が承認されること。",
      "source_refs": [
        {
          "source_id": "SRC-012",
          "relation": "new_control_candidate",
          "evidence": "candidate_order_states.exception",
          "received_at": "2026-07-23"
        }
      ],
      "related_topics": [
        "payment_failed",
        "compensation",
        "operations"
      ],
      "artifact_impacts": [
        "REQ-001",
        "API-001",
        "OPS-001"
      ]
    },
    {
      "item_id": "OPN-021",
      "title": "支払結果回写失敗時の顧客システム・小程序・StarPay間の不整合補償を確定する",
      "item_kind": "risk",
      "tracking_mode": "decision_required",
      "status": "candidate",
      "approval_status": "review_required",
      "owner": "京成電鉄 / NSS / StarPay / 日立製作所",
      "due_date": null,
      "latest_update": "SRC-012のRisk候補として、微信支付成功と顧客Eチケット側状態不一致、Coupon登録後の未払い予約残存が提示された。",
      "remaining_point": "支払成功後の同期失敗、未払い予約残存、手動復旧、監視、リトライ、顧客通知。",
      "completion_condition": "不整合検知・補償・復旧手順が承認されること。",
      "source_refs": [
        {
          "source_id": "SRC-012",
          "relation": "new_control_candidate",
          "evidence": "RISK-CAND-PAYMENTSYNC-001 / RISK-CAND-UNPAID-001",
          "received_at": "2026-07-23"
        }
      ],
      "related_topics": [
        "payment_sync",
        "operations",
        "compensation"
      ],
      "artifact_impacts": [
        "API-001",
        "ARC-001",
        "OPS-001"
      ]
    }
  ],
  "source_registry": [
    {
      "source_id": "SRC-012",
      "title": "Eチケット外部連携API Draft・既存Web購入導線・微信小程序向け新購票フロー整理",
      "type": "consolidated_source_summary",
      "status": "imported",
      "source_date": "2026-07-23",
      "received_at": "2026-07-23",
      "import_result": "imported_for_control_reconciliation",
      "source_path": "sources/SRC-012.summary.yaml",
      "language": [
        "ja",
        "zh-CN"
      ],
      "category": [
        "customer_specification",
        "current_business_flow",
        "target_business_flow",
        "privacy_requirement",
        "open_questions"
      ],
      "artifact_impacts": [
        "REQ-001",
        "SCR-001",
        "API-001",
        "ARC-001",
        "DB-001",
        "TST-001",
        "OPS-001",
        "MGT-001"
      ],
      "control_reconciliation": {
        "result": "completed",
        "existing_controls_updated": [
          "OPN-001",
          "OPN-002",
          "OPN-005",
          "OPN-006"
        ],
        "new_candidates_created": [
          "OPN-011",
          "OPN-012",
          "OPN-013",
          "OPN-014",
          "OPN-015",
          "OPN-016",
          "OPN-017",
          "OPN-018",
          "OPN-019",
          "OPN-020",
          "OPN-021"
        ],
        "artifact_change_apply_executed": false
      },
      "notes": [
        "API Draft received after the original 2026-07-17 current-version target.",
        "Draft still lacks authentication, final endpoint/action, idempotency, payment result sync, coupon cancel/expiry, and face status completion details."
      ]
    }
  ],
  "document_governance": [
    {
      "artifact_id": "REQ-001",
      "approval_status": "review_required",
      "completion_status": "in_progress",
      "lifecycle_status": "active",
      "aggregated_approval_status": "review_required",
      "aggregated_completion_status": "not_started",
      "weighted_completion_percentage": 0,
      "section_count": 11
    }
  ],
  "section_governance": [
    {
      "artifact_id": "REQ-001",
      "sections": [
        {
          "section_id": "REQ-001-S01",
          "section_title": "6.1 文書概要",
          "section_order": 1,
          "source_anchor": {
            "heading": "6.1 文書概要",
            "start_line": 119,
            "end_line": 126
          },
          "source_hash": "44712481ef27e466225130d405cd0019d4aabd7cd0e650ab102d13311f7a489b",
          "required": true,
          "weight": 1,
          "lifecycle_status": "active",
          "approval_status": "not_reviewed",
          "completion_status": "not_started",
          "semantic_change_status": "unchanged"
        },
        {
          "section_id": "REQ-001-S02",
          "section_title": "6.2 プロジェクト背景",
          "section_order": 2,
          "source_anchor": {
            "heading": "6.2 プロジェクト背景",
            "start_line": 127,
            "end_line": 146
          },
          "source_hash": "44712481ef27e466225130d405cd0019d4aabd7cd0e650ab102d13311f7a489b",
          "required": true,
          "weight": 1,
          "lifecycle_status": "active",
          "approval_status": "not_reviewed",
          "completion_status": "not_started",
          "semantic_change_status": "unchanged"
        },
        {
          "section_id": "REQ-001-S03",
          "section_title": "6.3 対象スコープ",
          "section_order": 3,
          "source_anchor": {
            "heading": "6.3 対象スコープ",
            "start_line": 147,
            "end_line": 180
          },
          "source_hash": "44712481ef27e466225130d405cd0019d4aabd7cd0e650ab102d13311f7a489b",
          "required": true,
          "weight": 1,
          "lifecycle_status": "active",
          "approval_status": "not_reviewed",
          "completion_status": "not_started",
          "semantic_change_status": "unchanged"
        },
        {
          "section_id": "REQ-001-S04",
          "section_title": "6.4 業務要件",
          "section_order": 4,
          "source_anchor": {
            "heading": "6.4 業務要件",
            "start_line": 181,
            "end_line": 199
          },
          "source_hash": "44712481ef27e466225130d405cd0019d4aabd7cd0e650ab102d13311f7a489b",
          "required": true,
          "weight": 1,
          "lifecycle_status": "active",
          "approval_status": "not_reviewed",
          "completion_status": "not_started",
          "semantic_change_status": "unchanged"
        },
        {
          "section_id": "REQ-001-S05",
          "section_title": "6.5 機能要件",
          "section_order": 5,
          "source_anchor": {
            "heading": "6.5 機能要件",
            "start_line": 200,
            "end_line": 229
          },
          "source_hash": "44712481ef27e466225130d405cd0019d4aabd7cd0e650ab102d13311f7a489b",
          "required": true,
          "weight": 1,
          "lifecycle_status": "active",
          "approval_status": "not_reviewed",
          "completion_status": "not_started",
          "semantic_change_status": "unchanged"
        },
        {
          "section_id": "REQ-001-S06",
          "section_title": "6.6 外部システム連携要件",
          "section_order": 6,
          "source_anchor": {
            "heading": "6.6 外部システム連携要件",
            "start_line": 230,
            "end_line": 252
          },
          "source_hash": "44712481ef27e466225130d405cd0019d4aabd7cd0e650ab102d13311f7a489b",
          "required": true,
          "weight": 1,
          "lifecycle_status": "active",
          "approval_status": "not_reviewed",
          "completion_status": "not_started",
          "semantic_change_status": "unchanged"
        },
        {
          "section_id": "REQ-001-S07",
          "section_title": "6.7 非機能要件",
          "section_order": 7,
          "source_anchor": {
            "heading": "6.7 非機能要件",
            "start_line": 253,
            "end_line": 266
          },
          "source_hash": "44712481ef27e466225130d405cd0019d4aabd7cd0e650ab102d13311f7a489b",
          "required": true,
          "weight": 1,
          "lifecycle_status": "active",
          "approval_status": "not_reviewed",
          "completion_status": "not_started",
          "semantic_change_status": "unchanged"
        },
        {
          "section_id": "REQ-001-S08",
          "section_title": "6.8 成果物・関連文書",
          "section_order": 8,
          "source_anchor": {
            "heading": "6.8 成果物・関連文書",
            "start_line": 267,
            "end_line": 277
          },
          "source_hash": "44712481ef27e466225130d405cd0019d4aabd7cd0e650ab102d13311f7a489b",
          "required": true,
          "weight": 1,
          "lifecycle_status": "active",
          "approval_status": "not_reviewed",
          "completion_status": "not_started",
          "semantic_change_status": "unchanged"
        },
        {
          "section_id": "REQ-001-S09",
          "section_title": "6.9 リスク・課題",
          "section_order": 9,
          "source_anchor": {
            "heading": "6.9 リスク・課題",
            "start_line": 278,
            "end_line": 294
          },
          "source_hash": "44712481ef27e466225130d405cd0019d4aabd7cd0e650ab102d13311f7a489b",
          "required": true,
          "weight": 1,
          "lifecycle_status": "active",
          "approval_status": "not_reviewed",
          "completion_status": "not_started",
          "semantic_change_status": "unchanged"
        },
        {
          "section_id": "REQ-001-S10",
          "section_title": "6.10 確認事項",
          "section_order": 10,
          "source_anchor": {
            "heading": "6.10 確認事項",
            "start_line": 295,
            "end_line": 318
          },
          "source_hash": "44712481ef27e466225130d405cd0019d4aabd7cd0e650ab102d13311f7a489b",
          "required": true,
          "weight": 1,
          "lifecycle_status": "active",
          "approval_status": "not_reviewed",
          "completion_status": "not_started",
          "semantic_change_status": "unchanged"
        },
        {
          "section_id": "REQ-001-S11",
          "section_title": "7. 未決事項",
          "section_order": 11,
          "source_anchor": {
            "heading": "7. 未決事項",
            "start_line": 319,
            "end_line": 345
          },
          "source_hash": "44712481ef27e466225130d405cd0019d4aabd7cd0e650ab102d13311f7a489b",
          "required": true,
          "weight": 1,
          "lifecycle_status": "active",
          "approval_status": "not_reviewed",
          "completion_status": "not_started",
          "semantic_change_status": "unchanged"
        }
      ]
    }
  ],
  "artifact_review_summary": {
    "total": 0,
    "pending": 0,
    "by_status": {}
  },
  "batch_summary": [
    {
      "batch_id": "WB-20260707-MTG",
      "title": "キックオフミーティング 第2回",
      "automatic_updates": "既存管理記録を10件のOpen Itemへ整理",
      "new_candidates": "新規項目はPM確認対象",
      "status": "applied"
    }
  ],
  "daily_workflow": {
    "workflow_id": "DAILY-PM-WORKFLOW-001",
    "version": "1.0",
    "project_id": "KEISEI",
    "principles": [
      "evidence_first",
      "deterministic_rules_before_llm",
      "pm_reviews_exceptions_only",
      "formal_artifacts_change_only_after_approval"
    ],
    "intake_levels": [
      {
        "level": "L0",
        "name": "evidence_only",
        "description": "重複、既知情報、補足証拠。KnowledgeやArtifactは変更しない。",
        "approval_required": false,
        "route": "archive_as_evidence"
      },
      {
        "level": "L1",
        "name": "operational_update",
        "description": "状態、日付、担当、回答などの軽量更新。",
        "approval_required": "batch_confirmation",
        "route": "update_knowledge"
      },
      {
        "level": "L2",
        "name": "single_artifact_change",
        "description": "単一Artifactの内容変更。",
        "approval_required": true,
        "route": "artifact_revision"
      },
      {
        "level": "L3",
        "name": "baseline_change",
        "description": "Scope、Schedule、Architectureなど複数Artifactに影響する変更。",
        "approval_required": true,
        "route": "change_control"
      },
      {
        "level": "L4",
        "name": "governance_change",
        "description": "Schema、方法論、Governance Contract自体の変更。",
        "approval_required": true,
        "route": "governance_migration"
      }
    ],
    "pm_inbox_sections": [
      "decisions",
      "customer_questions",
      "overdue_items",
      "change_candidates",
      "artifact_approvals",
      "auto_processed"
    ],
    "state_sources": {
      "project_facts": "knowledge/project-facts.yaml",
      "open_items": "knowledge/open-items.yaml",
      "qa": "knowledge/qa-register.yaml",
      "decisions": "knowledge/decisions.yaml",
      "artifacts": "artifacts/artifact-registry.yaml",
      "intake": "intake/intake-register.yaml"
    },
    "outputs": {
      "dashboard": "dashboard/dashboard-data.json",
      "javascript": "dashboard/js/data.js"
    }
  },
  "intake_items": [],
  "pm_inbox": {
    "display_order": [
      "decision",
      "overdue",
      "change_candidate",
      "customer_waiting",
      "auto_processed"
    ],
    "counts": {
      "decision": 7,
      "overdue": 1,
      "change_candidate": 0,
      "customer_waiting": 8,
      "auto_processed": 0
    },
    "queues": {
      "decision": [
        {
          "id": "ACT-DEC-002",
          "source_id": "OPN-002",
          "action_type": "pm_decision",
          "title": "顔認証登録フロー、責任分界および越境データ取扱いを確定する",
          "owner": "京成電鉄 / 日立製作所 / NSS",
          "due_date": null,
          "status": "partially_resolved",
          "available_actions": [
            "accept",
            "edit",
            "escalate"
          ]
        },
        {
          "id": "ACT-DEC-003",
          "source_id": "OPN-003",
          "action_type": "pm_decision",
          "title": "正式なリリース目標と全体スケジュールを確定する",
          "owner": "京成電鉄 / NSS / 日立製作所",
          "due_date": null,
          "status": "partially_resolved",
          "available_actions": [
            "accept",
            "edit",
            "escalate"
          ]
        },
        {
          "id": "ACT-DEC-004",
          "source_id": "OPN-004",
          "action_type": "pm_decision",
          "title": "QRコード、顔認証、座席指定のフェーズ分割と正式スコープを確定する",
          "owner": "京成電鉄 / NSS",
          "due_date": null,
          "status": "open",
          "available_actions": [
            "accept",
            "edit",
            "escalate"
          ]
        },
        {
          "id": "ACT-DEC-005",
          "source_id": "OPN-005",
          "action_type": "pm_decision",
          "title": "キャンセル／返金対応の要否、業務フローおよびシステム影響を確定する",
          "owner": "京成電鉄 / NSS",
          "due_date": null,
          "status": "open",
          "available_actions": [
            "accept",
            "edit",
            "escalate"
          ]
        },
        {
          "id": "ACT-DEC-006",
          "source_id": "OPN-006",
          "action_type": "pm_decision",
          "title": "管理画面、非機能要件、セキュリティおよび運用保守範囲を確定する",
          "owner": "NSS / 京成電鉄",
          "due_date": null,
          "status": "open",
          "available_actions": [
            "accept",
            "edit",
            "escalate"
          ]
        },
        {
          "id": "ACT-DEC-007",
          "source_id": "OPN-007",
          "action_type": "pm_decision",
          "title": "プロジェクト体制、意思決定者、各社・社内の担当範囲を確定する",
          "owner": "京成電鉄 / NSS",
          "due_date": null,
          "status": "partially_resolved",
          "available_actions": [
            "accept",
            "edit",
            "escalate"
          ]
        },
        {
          "id": "ACT-DEC-009",
          "source_id": "OPN-009",
          "action_type": "pm_decision",
          "title": "見積・予算・発注条件を確定する",
          "owner": "京成電鉄 / NSS営業",
          "due_date": null,
          "status": "open",
          "available_actions": [
            "accept",
            "edit",
            "escalate"
          ]
        }
      ],
      "overdue": [
        {
          "id": "ACT-OVD-010",
          "source_id": "OPN-010",
          "action_type": "schedule_disposition",
          "title": "要件定義書初版のレビューコメントを回収する",
          "owner": "PM",
          "due_date": "2026-07-17",
          "status": "in_progress",
          "available_actions": [
            "complete",
            "extend",
            "escalate"
          ]
        }
      ],
      "change_candidate": [],
      "customer_waiting": [
        {
          "id": "ACT-QA-002",
          "source_id": "QA-002",
          "action_type": "customer_follow_up",
          "title": "日立製作所側I/F仕様書の初版および正式版はいつ提供されるか。",
          "owner": null,
          "due_date": null,
          "status": "partially_answered",
          "available_actions": [
            "follow_up",
            "edit_due_date",
            "escalate"
          ]
        },
        {
          "id": "ACT-QA-003",
          "source_id": "QA-003",
          "action_type": "customer_follow_up",
          "title": "顔認証、乗車券管理、座席管理等の各社開発範囲と責任分界をどのように確定するか。",
          "owner": null,
          "due_date": null,
          "status": "partially_answered",
          "available_actions": [
            "follow_up",
            "edit_due_date",
            "escalate"
          ]
        },
        {
          "id": "ACT-QA-004",
          "source_id": "QA-004",
          "action_type": "customer_follow_up",
          "title": "要件定義Fix、各発注、開発完了、サービスインの正式日程はいつか。",
          "owner": null,
          "due_date": null,
          "status": "partially_answered",
          "available_actions": [
            "follow_up",
            "edit_due_date",
            "escalate"
          ]
        },
        {
          "id": "ACT-QA-005",
          "source_id": "QA-005",
          "action_type": "customer_follow_up",
          "title": "総額2,500万円の予算条件と、超過時の来年度予算扱いは正式な前提か。",
          "owner": null,
          "due_date": null,
          "status": "unanswered",
          "available_actions": [
            "follow_up",
            "edit_due_date",
            "escalate"
          ]
        },
        {
          "id": "ACT-QA-006",
          "source_id": "QA-006",
          "action_type": "customer_follow_up",
          "title": "Ph.1、Ph.1.1、Ph.2の正式な機能範囲とリリース分割をどう確定するか。",
          "owner": null,
          "due_date": null,
          "status": "partially_answered",
          "available_actions": [
            "follow_up",
            "edit_due_date",
            "escalate"
          ]
        },
        {
          "id": "ACT-QA-007",
          "source_id": "QA-007",
          "action_type": "customer_follow_up",
          "title": "API連携を購入情報I/Fのみに限定する条件は正式決定か。",
          "owner": null,
          "due_date": null,
          "status": "partially_answered",
          "available_actions": [
            "follow_up",
            "edit_due_date",
            "escalate"
          ]
        },
        {
          "id": "ACT-QA-008",
          "source_id": "QA-008",
          "action_type": "customer_follow_up",
          "title": "エンドユーザーへの顔登録URL連携および決済・チケット情報連携の責任範囲はどこか。",
          "owner": null,
          "due_date": null,
          "status": "partially_answered",
          "available_actions": [
            "follow_up",
            "edit_due_date",
            "escalate"
          ]
        },
        {
          "id": "ACT-QA-009",
          "source_id": "QA-009",
          "action_type": "customer_follow_up",
          "title": "決済処理をWeChat側で完結させる前提は正式決定か。",
          "owner": null,
          "due_date": null,
          "status": "partially_answered",
          "available_actions": [
            "follow_up",
            "edit_due_date",
            "escalate"
          ]
        }
      ],
      "auto_processed": []
    },
    "decisions": [
      {
        "id": "ACT-DEC-002",
        "source_id": "OPN-002",
        "action_type": "pm_decision",
        "title": "顔認証登録フロー、責任分界および越境データ取扱いを確定する",
        "owner": "京成電鉄 / 日立製作所 / NSS",
        "due_date": null,
        "status": "partially_resolved",
        "available_actions": [
          "accept",
          "edit",
          "escalate"
        ]
      },
      {
        "id": "ACT-DEC-003",
        "source_id": "OPN-003",
        "action_type": "pm_decision",
        "title": "正式なリリース目標と全体スケジュールを確定する",
        "owner": "京成電鉄 / NSS / 日立製作所",
        "due_date": null,
        "status": "partially_resolved",
        "available_actions": [
          "accept",
          "edit",
          "escalate"
        ]
      },
      {
        "id": "ACT-DEC-004",
        "source_id": "OPN-004",
        "action_type": "pm_decision",
        "title": "QRコード、顔認証、座席指定のフェーズ分割と正式スコープを確定する",
        "owner": "京成電鉄 / NSS",
        "due_date": null,
        "status": "open",
        "available_actions": [
          "accept",
          "edit",
          "escalate"
        ]
      },
      {
        "id": "ACT-DEC-005",
        "source_id": "OPN-005",
        "action_type": "pm_decision",
        "title": "キャンセル／返金対応の要否、業務フローおよびシステム影響を確定する",
        "owner": "京成電鉄 / NSS",
        "due_date": null,
        "status": "open",
        "available_actions": [
          "accept",
          "edit",
          "escalate"
        ]
      },
      {
        "id": "ACT-DEC-006",
        "source_id": "OPN-006",
        "action_type": "pm_decision",
        "title": "管理画面、非機能要件、セキュリティおよび運用保守範囲を確定する",
        "owner": "NSS / 京成電鉄",
        "due_date": null,
        "status": "open",
        "available_actions": [
          "accept",
          "edit",
          "escalate"
        ]
      },
      {
        "id": "ACT-DEC-007",
        "source_id": "OPN-007",
        "action_type": "pm_decision",
        "title": "プロジェクト体制、意思決定者、各社・社内の担当範囲を確定する",
        "owner": "京成電鉄 / NSS",
        "due_date": null,
        "status": "partially_resolved",
        "available_actions": [
          "accept",
          "edit",
          "escalate"
        ]
      },
      {
        "id": "ACT-DEC-009",
        "source_id": "OPN-009",
        "action_type": "pm_decision",
        "title": "見積・予算・発注条件を確定する",
        "owner": "京成電鉄 / NSS営業",
        "due_date": null,
        "status": "open",
        "available_actions": [
          "accept",
          "edit",
          "escalate"
        ]
      }
    ],
    "overdue_items": [
      {
        "id": "ACT-OVD-010",
        "source_id": "OPN-010",
        "action_type": "schedule_disposition",
        "title": "要件定義書初版のレビューコメントを回収する",
        "owner": "PM",
        "due_date": "2026-07-17",
        "status": "in_progress",
        "available_actions": [
          "complete",
          "extend",
          "escalate"
        ]
      }
    ],
    "change_candidates": [],
    "customer_questions": [
      {
        "id": "ACT-QA-002",
        "source_id": "QA-002",
        "action_type": "customer_follow_up",
        "title": "日立製作所側I/F仕様書の初版および正式版はいつ提供されるか。",
        "owner": null,
        "due_date": null,
        "status": "partially_answered",
        "available_actions": [
          "follow_up",
          "edit_due_date",
          "escalate"
        ]
      },
      {
        "id": "ACT-QA-003",
        "source_id": "QA-003",
        "action_type": "customer_follow_up",
        "title": "顔認証、乗車券管理、座席管理等の各社開発範囲と責任分界をどのように確定するか。",
        "owner": null,
        "due_date": null,
        "status": "partially_answered",
        "available_actions": [
          "follow_up",
          "edit_due_date",
          "escalate"
        ]
      },
      {
        "id": "ACT-QA-004",
        "source_id": "QA-004",
        "action_type": "customer_follow_up",
        "title": "要件定義Fix、各発注、開発完了、サービスインの正式日程はいつか。",
        "owner": null,
        "due_date": null,
        "status": "partially_answered",
        "available_actions": [
          "follow_up",
          "edit_due_date",
          "escalate"
        ]
      },
      {
        "id": "ACT-QA-005",
        "source_id": "QA-005",
        "action_type": "customer_follow_up",
        "title": "総額2,500万円の予算条件と、超過時の来年度予算扱いは正式な前提か。",
        "owner": null,
        "due_date": null,
        "status": "unanswered",
        "available_actions": [
          "follow_up",
          "edit_due_date",
          "escalate"
        ]
      },
      {
        "id": "ACT-QA-006",
        "source_id": "QA-006",
        "action_type": "customer_follow_up",
        "title": "Ph.1、Ph.1.1、Ph.2の正式な機能範囲とリリース分割をどう確定するか。",
        "owner": null,
        "due_date": null,
        "status": "partially_answered",
        "available_actions": [
          "follow_up",
          "edit_due_date",
          "escalate"
        ]
      },
      {
        "id": "ACT-QA-007",
        "source_id": "QA-007",
        "action_type": "customer_follow_up",
        "title": "API連携を購入情報I/Fのみに限定する条件は正式決定か。",
        "owner": null,
        "due_date": null,
        "status": "partially_answered",
        "available_actions": [
          "follow_up",
          "edit_due_date",
          "escalate"
        ]
      },
      {
        "id": "ACT-QA-008",
        "source_id": "QA-008",
        "action_type": "customer_follow_up",
        "title": "エンドユーザーへの顔登録URL連携および決済・チケット情報連携の責任範囲はどこか。",
        "owner": null,
        "due_date": null,
        "status": "partially_answered",
        "available_actions": [
          "follow_up",
          "edit_due_date",
          "escalate"
        ]
      },
      {
        "id": "ACT-QA-009",
        "source_id": "QA-009",
        "action_type": "customer_follow_up",
        "title": "決済処理をWeChat側で完結させる前提は正式決定か。",
        "owner": null,
        "due_date": null,
        "status": "partially_answered",
        "available_actions": [
          "follow_up",
          "edit_due_date",
          "escalate"
        ]
      }
    ],
    "auto_processed": []
  },
  "views": {
    "pm_management": {
      "artifact_tree": {
        "project_id": "KEISEI",
        "categories": [
          {
            "category": {
              "ja": "管理",
              "zh-CN": "管理"
            },
            "artifacts": [
              {
                "artifact_id": "MGT-001",
                "title": "プロジェクト計画書",
                "status": "review_required",
                "version": "v0.2",
                "preview_path": "previews/artifacts/MGT-001.html",
                "preview_paths": {
                  "ja": "previews/artifacts/ja/MGT-001.html",
                  "zh-CN": "previews/artifacts/zh-CN/MGT-001.html",
                  "default": "previews/artifacts/MGT-001.html"
                },
                "completion_percentage": null,
                "review_status": "review_required",
                "review_comment_count": 0,
                "pending_review_comment_count": 0,
                "open_qa_count": 0,
                "sections": []
              },
              {
                "artifact_id": "WBS-001",
                "title": "WBS / スケジュール",
                "status": "review_required",
                "version": "v0.2",
                "preview_path": "previews/artifacts/WBS-001.html",
                "preview_paths": {
                  "ja": "previews/artifacts/ja/WBS-001.html",
                  "zh-CN": "previews/artifacts/zh-CN/WBS-001.html",
                  "default": "previews/artifacts/WBS-001.html"
                },
                "completion_percentage": null,
                "review_status": "review_required",
                "review_comment_count": 0,
                "pending_review_comment_count": 0,
                "open_qa_count": 0,
                "sections": []
              }
            ]
          },
          {
            "category": {
              "ja": "要件定義",
              "zh-CN": "需求定义"
            },
            "artifacts": [
              {
                "artifact_id": "REQ-001",
                "title": "要件定義書",
                "status": "review_required",
                "version": "v0.2",
                "preview_path": "previews/artifacts/REQ-001.html",
                "preview_paths": {
                  "ja": "previews/artifacts/ja/REQ-001.html",
                  "zh-CN": "previews/artifacts/zh-CN/REQ-001.html",
                  "default": "previews/artifacts/REQ-001.html"
                },
                "completion_percentage": 0,
                "review_status": "review_required",
                "review_comment_count": 0,
                "pending_review_comment_count": 0,
                "open_qa_count": 0,
                "sections": [
                  {
                    "section_id": "REQ-001-S01",
                    "section_title": "6.1 文書概要",
                    "section_order": 1,
                    "approval_status": "not_reviewed",
                    "completion_status": "not_started"
                  },
                  {
                    "section_id": "REQ-001-S02",
                    "section_title": "6.2 プロジェクト背景",
                    "section_order": 2,
                    "approval_status": "not_reviewed",
                    "completion_status": "not_started"
                  },
                  {
                    "section_id": "REQ-001-S03",
                    "section_title": "6.3 対象スコープ",
                    "section_order": 3,
                    "approval_status": "not_reviewed",
                    "completion_status": "not_started"
                  },
                  {
                    "section_id": "REQ-001-S04",
                    "section_title": "6.4 業務要件",
                    "section_order": 4,
                    "approval_status": "not_reviewed",
                    "completion_status": "not_started"
                  },
                  {
                    "section_id": "REQ-001-S05",
                    "section_title": "6.5 機能要件",
                    "section_order": 5,
                    "approval_status": "not_reviewed",
                    "completion_status": "not_started"
                  },
                  {
                    "section_id": "REQ-001-S06",
                    "section_title": "6.6 外部システム連携要件",
                    "section_order": 6,
                    "approval_status": "not_reviewed",
                    "completion_status": "not_started"
                  },
                  {
                    "section_id": "REQ-001-S07",
                    "section_title": "6.7 非機能要件",
                    "section_order": 7,
                    "approval_status": "not_reviewed",
                    "completion_status": "not_started"
                  },
                  {
                    "section_id": "REQ-001-S08",
                    "section_title": "6.8 成果物・関連文書",
                    "section_order": 8,
                    "approval_status": "not_reviewed",
                    "completion_status": "not_started"
                  },
                  {
                    "section_id": "REQ-001-S09",
                    "section_title": "6.9 リスク・課題",
                    "section_order": 9,
                    "approval_status": "not_reviewed",
                    "completion_status": "not_started"
                  },
                  {
                    "section_id": "REQ-001-S10",
                    "section_title": "6.10 確認事項",
                    "section_order": 10,
                    "approval_status": "not_reviewed",
                    "completion_status": "not_started"
                  },
                  {
                    "section_id": "REQ-001-S11",
                    "section_title": "7. 未決事項",
                    "section_order": 11,
                    "approval_status": "not_reviewed",
                    "completion_status": "not_started"
                  }
                ]
              },
              {
                "artifact_id": "SCR-001",
                "title": "画面・帳票設計書",
                "status": "review_required",
                "version": "v0.2",
                "preview_path": "previews/artifacts/SCR-001.html",
                "preview_paths": {
                  "ja": "previews/artifacts/SCR-001.html",
                  "zh-CN": "previews/artifacts/SCR-001.html",
                  "default": "previews/artifacts/SCR-001.html"
                },
                "completion_percentage": null,
                "review_status": "review_required",
                "review_comment_count": 0,
                "pending_review_comment_count": 0,
                "open_qa_count": 0,
                "sections": []
              }
            ]
          },
          {
            "category": {
              "ja": "設計",
              "zh-CN": "设计"
            },
            "artifacts": [
              {
                "artifact_id": "ARC-001",
                "title": "システム構成定義",
                "status": "review_required",
                "version": "v0.2",
                "preview_path": "previews/artifacts/ARC-001.html",
                "preview_paths": {
                  "ja": "previews/artifacts/ja/ARC-001.html",
                  "zh-CN": "previews/artifacts/zh-CN/ARC-001.html",
                  "default": "previews/artifacts/ARC-001.html"
                },
                "completion_percentage": null,
                "review_status": "review_required",
                "review_comment_count": 0,
                "pending_review_comment_count": 0,
                "open_qa_count": 0,
                "sections": []
              },
              {
                "artifact_id": "API-001",
                "title": "API確認表",
                "status": "review_required",
                "version": "v0.2",
                "preview_path": "previews/artifacts/API-001.html",
                "preview_paths": {
                  "ja": "previews/artifacts/ja/API-001.html",
                  "zh-CN": "previews/artifacts/zh-CN/API-001.html",
                  "default": "previews/artifacts/API-001.html"
                },
                "completion_percentage": null,
                "review_status": "review_required",
                "review_comment_count": 0,
                "pending_review_comment_count": 0,
                "open_qa_count": 0,
                "sections": []
              }
            ]
          },
          {
            "category": {
              "ja": "50_テスト",
              "zh-CN": "50_テスト"
            },
            "artifacts": [
              {
                "artifact_id": "TST-001",
                "title": "テスト計画",
                "status": "review_required",
                "version": "v0.2",
                "preview_path": "previews/artifacts/TST-001.html",
                "preview_paths": {
                  "ja": "previews/artifacts/ja/TST-001.html",
                  "zh-CN": "previews/artifacts/zh-CN/TST-001.html",
                  "default": "previews/artifacts/TST-001.html"
                },
                "completion_percentage": null,
                "review_status": "review_required",
                "review_comment_count": 0,
                "pending_review_comment_count": 0,
                "open_qa_count": 0,
                "sections": []
              }
            ]
          },
          {
            "category": {
              "ja": "60_リリース",
              "zh-CN": "60_リリース"
            },
            "artifacts": [
              {
                "artifact_id": "REL-001",
                "title": "リリース計画",
                "status": "review_required",
                "version": "v0.2",
                "preview_path": "previews/artifacts/REL-001.html",
                "preview_paths": {
                  "ja": "previews/artifacts/ja/REL-001.html",
                  "zh-CN": "previews/artifacts/zh-CN/REL-001.html",
                  "default": "previews/artifacts/REL-001.html"
                },
                "completion_percentage": null,
                "review_status": "review_required",
                "review_comment_count": 0,
                "pending_review_comment_count": 0,
                "open_qa_count": 0,
                "sections": []
              }
            ]
          }
        ]
      },
      "action_center": {
        "display_order": [
          "decision",
          "overdue",
          "change_candidate",
          "customer_waiting",
          "auto_processed"
        ],
        "counts": {
          "decision": 7,
          "overdue": 1,
          "change_candidate": 0,
          "customer_waiting": 8,
          "auto_processed": 0
        },
        "queues": {
          "decision": [
            {
              "id": "ACT-DEC-002",
              "source_id": "OPN-002",
              "action_type": "pm_decision",
              "title": "顔認証登録フロー、責任分界および越境データ取扱いを確定する",
              "owner": "京成電鉄 / 日立製作所 / NSS",
              "due_date": null,
              "status": "partially_resolved",
              "available_actions": [
                "accept",
                "edit",
                "escalate"
              ]
            },
            {
              "id": "ACT-DEC-003",
              "source_id": "OPN-003",
              "action_type": "pm_decision",
              "title": "正式なリリース目標と全体スケジュールを確定する",
              "owner": "京成電鉄 / NSS / 日立製作所",
              "due_date": null,
              "status": "partially_resolved",
              "available_actions": [
                "accept",
                "edit",
                "escalate"
              ]
            },
            {
              "id": "ACT-DEC-004",
              "source_id": "OPN-004",
              "action_type": "pm_decision",
              "title": "QRコード、顔認証、座席指定のフェーズ分割と正式スコープを確定する",
              "owner": "京成電鉄 / NSS",
              "due_date": null,
              "status": "open",
              "available_actions": [
                "accept",
                "edit",
                "escalate"
              ]
            },
            {
              "id": "ACT-DEC-005",
              "source_id": "OPN-005",
              "action_type": "pm_decision",
              "title": "キャンセル／返金対応の要否、業務フローおよびシステム影響を確定する",
              "owner": "京成電鉄 / NSS",
              "due_date": null,
              "status": "open",
              "available_actions": [
                "accept",
                "edit",
                "escalate"
              ]
            },
            {
              "id": "ACT-DEC-006",
              "source_id": "OPN-006",
              "action_type": "pm_decision",
              "title": "管理画面、非機能要件、セキュリティおよび運用保守範囲を確定する",
              "owner": "NSS / 京成電鉄",
              "due_date": null,
              "status": "open",
              "available_actions": [
                "accept",
                "edit",
                "escalate"
              ]
            },
            {
              "id": "ACT-DEC-007",
              "source_id": "OPN-007",
              "action_type": "pm_decision",
              "title": "プロジェクト体制、意思決定者、各社・社内の担当範囲を確定する",
              "owner": "京成電鉄 / NSS",
              "due_date": null,
              "status": "partially_resolved",
              "available_actions": [
                "accept",
                "edit",
                "escalate"
              ]
            },
            {
              "id": "ACT-DEC-009",
              "source_id": "OPN-009",
              "action_type": "pm_decision",
              "title": "見積・予算・発注条件を確定する",
              "owner": "京成電鉄 / NSS営業",
              "due_date": null,
              "status": "open",
              "available_actions": [
                "accept",
                "edit",
                "escalate"
              ]
            }
          ],
          "overdue": [
            {
              "id": "ACT-OVD-010",
              "source_id": "OPN-010",
              "action_type": "schedule_disposition",
              "title": "要件定義書初版のレビューコメントを回収する",
              "owner": "PM",
              "due_date": "2026-07-17",
              "status": "in_progress",
              "available_actions": [
                "complete",
                "extend",
                "escalate"
              ]
            }
          ],
          "change_candidate": [],
          "customer_waiting": [
            {
              "id": "ACT-QA-002",
              "source_id": "QA-002",
              "action_type": "customer_follow_up",
              "title": "日立製作所側I/F仕様書の初版および正式版はいつ提供されるか。",
              "owner": null,
              "due_date": null,
              "status": "partially_answered",
              "available_actions": [
                "follow_up",
                "edit_due_date",
                "escalate"
              ]
            },
            {
              "id": "ACT-QA-003",
              "source_id": "QA-003",
              "action_type": "customer_follow_up",
              "title": "顔認証、乗車券管理、座席管理等の各社開発範囲と責任分界をどのように確定するか。",
              "owner": null,
              "due_date": null,
              "status": "partially_answered",
              "available_actions": [
                "follow_up",
                "edit_due_date",
                "escalate"
              ]
            },
            {
              "id": "ACT-QA-004",
              "source_id": "QA-004",
              "action_type": "customer_follow_up",
              "title": "要件定義Fix、各発注、開発完了、サービスインの正式日程はいつか。",
              "owner": null,
              "due_date": null,
              "status": "partially_answered",
              "available_actions": [
                "follow_up",
                "edit_due_date",
                "escalate"
              ]
            },
            {
              "id": "ACT-QA-005",
              "source_id": "QA-005",
              "action_type": "customer_follow_up",
              "title": "総額2,500万円の予算条件と、超過時の来年度予算扱いは正式な前提か。",
              "owner": null,
              "due_date": null,
              "status": "unanswered",
              "available_actions": [
                "follow_up",
                "edit_due_date",
                "escalate"
              ]
            },
            {
              "id": "ACT-QA-006",
              "source_id": "QA-006",
              "action_type": "customer_follow_up",
              "title": "Ph.1、Ph.1.1、Ph.2の正式な機能範囲とリリース分割をどう確定するか。",
              "owner": null,
              "due_date": null,
              "status": "partially_answered",
              "available_actions": [
                "follow_up",
                "edit_due_date",
                "escalate"
              ]
            },
            {
              "id": "ACT-QA-007",
              "source_id": "QA-007",
              "action_type": "customer_follow_up",
              "title": "API連携を購入情報I/Fのみに限定する条件は正式決定か。",
              "owner": null,
              "due_date": null,
              "status": "partially_answered",
              "available_actions": [
                "follow_up",
                "edit_due_date",
                "escalate"
              ]
            },
            {
              "id": "ACT-QA-008",
              "source_id": "QA-008",
              "action_type": "customer_follow_up",
              "title": "エンドユーザーへの顔登録URL連携および決済・チケット情報連携の責任範囲はどこか。",
              "owner": null,
              "due_date": null,
              "status": "partially_answered",
              "available_actions": [
                "follow_up",
                "edit_due_date",
                "escalate"
              ]
            },
            {
              "id": "ACT-QA-009",
              "source_id": "QA-009",
              "action_type": "customer_follow_up",
              "title": "決済処理をWeChat側で完結させる前提は正式決定か。",
              "owner": null,
              "due_date": null,
              "status": "partially_answered",
              "available_actions": [
                "follow_up",
                "edit_due_date",
                "escalate"
              ]
            }
          ],
          "auto_processed": []
        },
        "decisions": [
          {
            "id": "ACT-DEC-002",
            "source_id": "OPN-002",
            "action_type": "pm_decision",
            "title": "顔認証登録フロー、責任分界および越境データ取扱いを確定する",
            "owner": "京成電鉄 / 日立製作所 / NSS",
            "due_date": null,
            "status": "partially_resolved",
            "available_actions": [
              "accept",
              "edit",
              "escalate"
            ]
          },
          {
            "id": "ACT-DEC-003",
            "source_id": "OPN-003",
            "action_type": "pm_decision",
            "title": "正式なリリース目標と全体スケジュールを確定する",
            "owner": "京成電鉄 / NSS / 日立製作所",
            "due_date": null,
            "status": "partially_resolved",
            "available_actions": [
              "accept",
              "edit",
              "escalate"
            ]
          },
          {
            "id": "ACT-DEC-004",
            "source_id": "OPN-004",
            "action_type": "pm_decision",
            "title": "QRコード、顔認証、座席指定のフェーズ分割と正式スコープを確定する",
            "owner": "京成電鉄 / NSS",
            "due_date": null,
            "status": "open",
            "available_actions": [
              "accept",
              "edit",
              "escalate"
            ]
          },
          {
            "id": "ACT-DEC-005",
            "source_id": "OPN-005",
            "action_type": "pm_decision",
            "title": "キャンセル／返金対応の要否、業務フローおよびシステム影響を確定する",
            "owner": "京成電鉄 / NSS",
            "due_date": null,
            "status": "open",
            "available_actions": [
              "accept",
              "edit",
              "escalate"
            ]
          },
          {
            "id": "ACT-DEC-006",
            "source_id": "OPN-006",
            "action_type": "pm_decision",
            "title": "管理画面、非機能要件、セキュリティおよび運用保守範囲を確定する",
            "owner": "NSS / 京成電鉄",
            "due_date": null,
            "status": "open",
            "available_actions": [
              "accept",
              "edit",
              "escalate"
            ]
          },
          {
            "id": "ACT-DEC-007",
            "source_id": "OPN-007",
            "action_type": "pm_decision",
            "title": "プロジェクト体制、意思決定者、各社・社内の担当範囲を確定する",
            "owner": "京成電鉄 / NSS",
            "due_date": null,
            "status": "partially_resolved",
            "available_actions": [
              "accept",
              "edit",
              "escalate"
            ]
          },
          {
            "id": "ACT-DEC-009",
            "source_id": "OPN-009",
            "action_type": "pm_decision",
            "title": "見積・予算・発注条件を確定する",
            "owner": "京成電鉄 / NSS営業",
            "due_date": null,
            "status": "open",
            "available_actions": [
              "accept",
              "edit",
              "escalate"
            ]
          }
        ],
        "overdue_items": [
          {
            "id": "ACT-OVD-010",
            "source_id": "OPN-010",
            "action_type": "schedule_disposition",
            "title": "要件定義書初版のレビューコメントを回収する",
            "owner": "PM",
            "due_date": "2026-07-17",
            "status": "in_progress",
            "available_actions": [
              "complete",
              "extend",
              "escalate"
            ]
          }
        ],
        "change_candidates": [],
        "customer_questions": [
          {
            "id": "ACT-QA-002",
            "source_id": "QA-002",
            "action_type": "customer_follow_up",
            "title": "日立製作所側I/F仕様書の初版および正式版はいつ提供されるか。",
            "owner": null,
            "due_date": null,
            "status": "partially_answered",
            "available_actions": [
              "follow_up",
              "edit_due_date",
              "escalate"
            ]
          },
          {
            "id": "ACT-QA-003",
            "source_id": "QA-003",
            "action_type": "customer_follow_up",
            "title": "顔認証、乗車券管理、座席管理等の各社開発範囲と責任分界をどのように確定するか。",
            "owner": null,
            "due_date": null,
            "status": "partially_answered",
            "available_actions": [
              "follow_up",
              "edit_due_date",
              "escalate"
            ]
          },
          {
            "id": "ACT-QA-004",
            "source_id": "QA-004",
            "action_type": "customer_follow_up",
            "title": "要件定義Fix、各発注、開発完了、サービスインの正式日程はいつか。",
            "owner": null,
            "due_date": null,
            "status": "partially_answered",
            "available_actions": [
              "follow_up",
              "edit_due_date",
              "escalate"
            ]
          },
          {
            "id": "ACT-QA-005",
            "source_id": "QA-005",
            "action_type": "customer_follow_up",
            "title": "総額2,500万円の予算条件と、超過時の来年度予算扱いは正式な前提か。",
            "owner": null,
            "due_date": null,
            "status": "unanswered",
            "available_actions": [
              "follow_up",
              "edit_due_date",
              "escalate"
            ]
          },
          {
            "id": "ACT-QA-006",
            "source_id": "QA-006",
            "action_type": "customer_follow_up",
            "title": "Ph.1、Ph.1.1、Ph.2の正式な機能範囲とリリース分割をどう確定するか。",
            "owner": null,
            "due_date": null,
            "status": "partially_answered",
            "available_actions": [
              "follow_up",
              "edit_due_date",
              "escalate"
            ]
          },
          {
            "id": "ACT-QA-007",
            "source_id": "QA-007",
            "action_type": "customer_follow_up",
            "title": "API連携を購入情報I/Fのみに限定する条件は正式決定か。",
            "owner": null,
            "due_date": null,
            "status": "partially_answered",
            "available_actions": [
              "follow_up",
              "edit_due_date",
              "escalate"
            ]
          },
          {
            "id": "ACT-QA-008",
            "source_id": "QA-008",
            "action_type": "customer_follow_up",
            "title": "エンドユーザーへの顔登録URL連携および決済・チケット情報連携の責任範囲はどこか。",
            "owner": null,
            "due_date": null,
            "status": "partially_answered",
            "available_actions": [
              "follow_up",
              "edit_due_date",
              "escalate"
            ]
          },
          {
            "id": "ACT-QA-009",
            "source_id": "QA-009",
            "action_type": "customer_follow_up",
            "title": "決済処理をWeChat側で完結させる前提は正式決定か。",
            "owner": null,
            "due_date": null,
            "status": "partially_answered",
            "available_actions": [
              "follow_up",
              "edit_due_date",
              "escalate"
            ]
          }
        ],
        "auto_processed": []
      },
      "inbox": {
        "display_order": [
          "decision",
          "overdue",
          "change_candidate",
          "customer_waiting",
          "auto_processed"
        ],
        "counts": {
          "decision": 7,
          "overdue": 1,
          "change_candidate": 0,
          "customer_waiting": 8,
          "auto_processed": 0
        },
        "queues": {
          "decision": [
            {
              "id": "ACT-DEC-002",
              "source_id": "OPN-002",
              "action_type": "pm_decision",
              "title": "顔認証登録フロー、責任分界および越境データ取扱いを確定する",
              "owner": "京成電鉄 / 日立製作所 / NSS",
              "due_date": null,
              "status": "partially_resolved",
              "available_actions": [
                "accept",
                "edit",
                "escalate"
              ]
            },
            {
              "id": "ACT-DEC-003",
              "source_id": "OPN-003",
              "action_type": "pm_decision",
              "title": "正式なリリース目標と全体スケジュールを確定する",
              "owner": "京成電鉄 / NSS / 日立製作所",
              "due_date": null,
              "status": "partially_resolved",
              "available_actions": [
                "accept",
                "edit",
                "escalate"
              ]
            },
            {
              "id": "ACT-DEC-004",
              "source_id": "OPN-004",
              "action_type": "pm_decision",
              "title": "QRコード、顔認証、座席指定のフェーズ分割と正式スコープを確定する",
              "owner": "京成電鉄 / NSS",
              "due_date": null,
              "status": "open",
              "available_actions": [
                "accept",
                "edit",
                "escalate"
              ]
            },
            {
              "id": "ACT-DEC-005",
              "source_id": "OPN-005",
              "action_type": "pm_decision",
              "title": "キャンセル／返金対応の要否、業務フローおよびシステム影響を確定する",
              "owner": "京成電鉄 / NSS",
              "due_date": null,
              "status": "open",
              "available_actions": [
                "accept",
                "edit",
                "escalate"
              ]
            },
            {
              "id": "ACT-DEC-006",
              "source_id": "OPN-006",
              "action_type": "pm_decision",
              "title": "管理画面、非機能要件、セキュリティおよび運用保守範囲を確定する",
              "owner": "NSS / 京成電鉄",
              "due_date": null,
              "status": "open",
              "available_actions": [
                "accept",
                "edit",
                "escalate"
              ]
            },
            {
              "id": "ACT-DEC-007",
              "source_id": "OPN-007",
              "action_type": "pm_decision",
              "title": "プロジェクト体制、意思決定者、各社・社内の担当範囲を確定する",
              "owner": "京成電鉄 / NSS",
              "due_date": null,
              "status": "partially_resolved",
              "available_actions": [
                "accept",
                "edit",
                "escalate"
              ]
            },
            {
              "id": "ACT-DEC-009",
              "source_id": "OPN-009",
              "action_type": "pm_decision",
              "title": "見積・予算・発注条件を確定する",
              "owner": "京成電鉄 / NSS営業",
              "due_date": null,
              "status": "open",
              "available_actions": [
                "accept",
                "edit",
                "escalate"
              ]
            }
          ],
          "overdue": [
            {
              "id": "ACT-OVD-010",
              "source_id": "OPN-010",
              "action_type": "schedule_disposition",
              "title": "要件定義書初版のレビューコメントを回収する",
              "owner": "PM",
              "due_date": "2026-07-17",
              "status": "in_progress",
              "available_actions": [
                "complete",
                "extend",
                "escalate"
              ]
            }
          ],
          "change_candidate": [],
          "customer_waiting": [
            {
              "id": "ACT-QA-002",
              "source_id": "QA-002",
              "action_type": "customer_follow_up",
              "title": "日立製作所側I/F仕様書の初版および正式版はいつ提供されるか。",
              "owner": null,
              "due_date": null,
              "status": "partially_answered",
              "available_actions": [
                "follow_up",
                "edit_due_date",
                "escalate"
              ]
            },
            {
              "id": "ACT-QA-003",
              "source_id": "QA-003",
              "action_type": "customer_follow_up",
              "title": "顔認証、乗車券管理、座席管理等の各社開発範囲と責任分界をどのように確定するか。",
              "owner": null,
              "due_date": null,
              "status": "partially_answered",
              "available_actions": [
                "follow_up",
                "edit_due_date",
                "escalate"
              ]
            },
            {
              "id": "ACT-QA-004",
              "source_id": "QA-004",
              "action_type": "customer_follow_up",
              "title": "要件定義Fix、各発注、開発完了、サービスインの正式日程はいつか。",
              "owner": null,
              "due_date": null,
              "status": "partially_answered",
              "available_actions": [
                "follow_up",
                "edit_due_date",
                "escalate"
              ]
            },
            {
              "id": "ACT-QA-005",
              "source_id": "QA-005",
              "action_type": "customer_follow_up",
              "title": "総額2,500万円の予算条件と、超過時の来年度予算扱いは正式な前提か。",
              "owner": null,
              "due_date": null,
              "status": "unanswered",
              "available_actions": [
                "follow_up",
                "edit_due_date",
                "escalate"
              ]
            },
            {
              "id": "ACT-QA-006",
              "source_id": "QA-006",
              "action_type": "customer_follow_up",
              "title": "Ph.1、Ph.1.1、Ph.2の正式な機能範囲とリリース分割をどう確定するか。",
              "owner": null,
              "due_date": null,
              "status": "partially_answered",
              "available_actions": [
                "follow_up",
                "edit_due_date",
                "escalate"
              ]
            },
            {
              "id": "ACT-QA-007",
              "source_id": "QA-007",
              "action_type": "customer_follow_up",
              "title": "API連携を購入情報I/Fのみに限定する条件は正式決定か。",
              "owner": null,
              "due_date": null,
              "status": "partially_answered",
              "available_actions": [
                "follow_up",
                "edit_due_date",
                "escalate"
              ]
            },
            {
              "id": "ACT-QA-008",
              "source_id": "QA-008",
              "action_type": "customer_follow_up",
              "title": "エンドユーザーへの顔登録URL連携および決済・チケット情報連携の責任範囲はどこか。",
              "owner": null,
              "due_date": null,
              "status": "partially_answered",
              "available_actions": [
                "follow_up",
                "edit_due_date",
                "escalate"
              ]
            },
            {
              "id": "ACT-QA-009",
              "source_id": "QA-009",
              "action_type": "customer_follow_up",
              "title": "決済処理をWeChat側で完結させる前提は正式決定か。",
              "owner": null,
              "due_date": null,
              "status": "partially_answered",
              "available_actions": [
                "follow_up",
                "edit_due_date",
                "escalate"
              ]
            }
          ],
          "auto_processed": []
        },
        "decisions": [
          {
            "id": "ACT-DEC-002",
            "source_id": "OPN-002",
            "action_type": "pm_decision",
            "title": "顔認証登録フロー、責任分界および越境データ取扱いを確定する",
            "owner": "京成電鉄 / 日立製作所 / NSS",
            "due_date": null,
            "status": "partially_resolved",
            "available_actions": [
              "accept",
              "edit",
              "escalate"
            ]
          },
          {
            "id": "ACT-DEC-003",
            "source_id": "OPN-003",
            "action_type": "pm_decision",
            "title": "正式なリリース目標と全体スケジュールを確定する",
            "owner": "京成電鉄 / NSS / 日立製作所",
            "due_date": null,
            "status": "partially_resolved",
            "available_actions": [
              "accept",
              "edit",
              "escalate"
            ]
          },
          {
            "id": "ACT-DEC-004",
            "source_id": "OPN-004",
            "action_type": "pm_decision",
            "title": "QRコード、顔認証、座席指定のフェーズ分割と正式スコープを確定する",
            "owner": "京成電鉄 / NSS",
            "due_date": null,
            "status": "open",
            "available_actions": [
              "accept",
              "edit",
              "escalate"
            ]
          },
          {
            "id": "ACT-DEC-005",
            "source_id": "OPN-005",
            "action_type": "pm_decision",
            "title": "キャンセル／返金対応の要否、業務フローおよびシステム影響を確定する",
            "owner": "京成電鉄 / NSS",
            "due_date": null,
            "status": "open",
            "available_actions": [
              "accept",
              "edit",
              "escalate"
            ]
          },
          {
            "id": "ACT-DEC-006",
            "source_id": "OPN-006",
            "action_type": "pm_decision",
            "title": "管理画面、非機能要件、セキュリティおよび運用保守範囲を確定する",
            "owner": "NSS / 京成電鉄",
            "due_date": null,
            "status": "open",
            "available_actions": [
              "accept",
              "edit",
              "escalate"
            ]
          },
          {
            "id": "ACT-DEC-007",
            "source_id": "OPN-007",
            "action_type": "pm_decision",
            "title": "プロジェクト体制、意思決定者、各社・社内の担当範囲を確定する",
            "owner": "京成電鉄 / NSS",
            "due_date": null,
            "status": "partially_resolved",
            "available_actions": [
              "accept",
              "edit",
              "escalate"
            ]
          },
          {
            "id": "ACT-DEC-009",
            "source_id": "OPN-009",
            "action_type": "pm_decision",
            "title": "見積・予算・発注条件を確定する",
            "owner": "京成電鉄 / NSS営業",
            "due_date": null,
            "status": "open",
            "available_actions": [
              "accept",
              "edit",
              "escalate"
            ]
          }
        ],
        "overdue_items": [
          {
            "id": "ACT-OVD-010",
            "source_id": "OPN-010",
            "action_type": "schedule_disposition",
            "title": "要件定義書初版のレビューコメントを回収する",
            "owner": "PM",
            "due_date": "2026-07-17",
            "status": "in_progress",
            "available_actions": [
              "complete",
              "extend",
              "escalate"
            ]
          }
        ],
        "change_candidates": [],
        "customer_questions": [
          {
            "id": "ACT-QA-002",
            "source_id": "QA-002",
            "action_type": "customer_follow_up",
            "title": "日立製作所側I/F仕様書の初版および正式版はいつ提供されるか。",
            "owner": null,
            "due_date": null,
            "status": "partially_answered",
            "available_actions": [
              "follow_up",
              "edit_due_date",
              "escalate"
            ]
          },
          {
            "id": "ACT-QA-003",
            "source_id": "QA-003",
            "action_type": "customer_follow_up",
            "title": "顔認証、乗車券管理、座席管理等の各社開発範囲と責任分界をどのように確定するか。",
            "owner": null,
            "due_date": null,
            "status": "partially_answered",
            "available_actions": [
              "follow_up",
              "edit_due_date",
              "escalate"
            ]
          },
          {
            "id": "ACT-QA-004",
            "source_id": "QA-004",
            "action_type": "customer_follow_up",
            "title": "要件定義Fix、各発注、開発完了、サービスインの正式日程はいつか。",
            "owner": null,
            "due_date": null,
            "status": "partially_answered",
            "available_actions": [
              "follow_up",
              "edit_due_date",
              "escalate"
            ]
          },
          {
            "id": "ACT-QA-005",
            "source_id": "QA-005",
            "action_type": "customer_follow_up",
            "title": "総額2,500万円の予算条件と、超過時の来年度予算扱いは正式な前提か。",
            "owner": null,
            "due_date": null,
            "status": "unanswered",
            "available_actions": [
              "follow_up",
              "edit_due_date",
              "escalate"
            ]
          },
          {
            "id": "ACT-QA-006",
            "source_id": "QA-006",
            "action_type": "customer_follow_up",
            "title": "Ph.1、Ph.1.1、Ph.2の正式な機能範囲とリリース分割をどう確定するか。",
            "owner": null,
            "due_date": null,
            "status": "partially_answered",
            "available_actions": [
              "follow_up",
              "edit_due_date",
              "escalate"
            ]
          },
          {
            "id": "ACT-QA-007",
            "source_id": "QA-007",
            "action_type": "customer_follow_up",
            "title": "API連携を購入情報I/Fのみに限定する条件は正式決定か。",
            "owner": null,
            "due_date": null,
            "status": "partially_answered",
            "available_actions": [
              "follow_up",
              "edit_due_date",
              "escalate"
            ]
          },
          {
            "id": "ACT-QA-008",
            "source_id": "QA-008",
            "action_type": "customer_follow_up",
            "title": "エンドユーザーへの顔登録URL連携および決済・チケット情報連携の責任範囲はどこか。",
            "owner": null,
            "due_date": null,
            "status": "partially_answered",
            "available_actions": [
              "follow_up",
              "edit_due_date",
              "escalate"
            ]
          },
          {
            "id": "ACT-QA-009",
            "source_id": "QA-009",
            "action_type": "customer_follow_up",
            "title": "決済処理をWeChat側で完結させる前提は正式決定か。",
            "owner": null,
            "due_date": null,
            "status": "partially_answered",
            "available_actions": [
              "follow_up",
              "edit_due_date",
              "escalate"
            ]
          }
        ],
        "auto_processed": []
      }
    },
    "project_shared": {
      "qa_items": [
        {
          "qa_id": "QA-001",
          "number": "QA-001",
          "question": "課題管理の主システムをBacklogとするか、AI-PMO Dashboardとするか。",
          "background": null,
          "category": null,
          "status": "deferred_internal",
          "shared_status": "under_review",
          "owner": null,
          "asked_to": null,
          "answered_by": null,
          "due_date": null,
          "answer": "初期のPMO Dashboardはプロジェクト内部向けの管理・共有基盤として運用する。Backlog等との最終的な主従関係はMVP範囲外。",
          "answer_date": null,
          "evidence_ref": null,
          "source_ids": [],
          "related_open_item_ids": [],
          "related_artifacts": []
        },
        {
          "qa_id": "QA-002",
          "number": "QA-002",
          "question": "日立製作所側I/F仕様書の初版および正式版はいつ提供されるか。",
          "background": null,
          "category": null,
          "status": "partially_answered",
          "shared_status": "answer_received",
          "owner": null,
          "asked_to": null,
          "answered_by": null,
          "due_date": null,
          "answer": "現行版は2026-07-17目処、正式版は2026-07-31目標。実受領待ち。",
          "answer_date": null,
          "evidence_ref": "WB-20260707-MTG",
          "source_ids": [],
          "related_open_item_ids": [
            "OPN-001"
          ],
          "related_artifacts": []
        },
        {
          "qa_id": "QA-003",
          "number": "QA-003",
          "question": "顔認証、乗車券管理、座席管理等の各社開発範囲と責任分界をどのように確定するか。",
          "background": null,
          "category": null,
          "status": "partially_answered",
          "shared_status": "answer_received",
          "owner": null,
          "asked_to": null,
          "answered_by": null,
          "due_date": null,
          "answer": "日立製作所がAPI連携ベンダーとして参画し、実務窓口は林氏。詳細責任分界は継続検討。",
          "answer_date": null,
          "evidence_ref": "WB-20260707-MTG",
          "source_ids": [],
          "related_open_item_ids": [
            "OPN-002"
          ],
          "related_artifacts": []
        },
        {
          "qa_id": "QA-004",
          "number": "QA-004",
          "question": "要件定義Fix、各発注、開発完了、サービスインの正式日程はいつか。",
          "background": null,
          "category": null,
          "status": "partially_answered",
          "shared_status": "answer_received",
          "owner": null,
          "asked_to": null,
          "answered_by": null,
          "due_date": null,
          "answer": "サービスインは1月～2月、遅くとも3月中旬を軸に再調整。要件定義完了後に正式確定。",
          "answer_date": null,
          "evidence_ref": "WB-20260707-MTG",
          "source_ids": [],
          "related_open_item_ids": [
            "OPN-003"
          ],
          "related_artifacts": []
        },
        {
          "qa_id": "QA-005",
          "number": "QA-005",
          "question": "総額2,500万円の予算条件と、超過時の来年度予算扱いは正式な前提か。",
          "background": null,
          "category": null,
          "status": "unanswered",
          "shared_status": "waiting_customer",
          "owner": null,
          "asked_to": null,
          "answered_by": null,
          "due_date": null,
          "answer": null,
          "answer_date": null,
          "evidence_ref": null,
          "source_ids": [],
          "related_open_item_ids": [
            "OPN-009"
          ],
          "related_artifacts": []
        },
        {
          "qa_id": "QA-006",
          "number": "QA-006",
          "question": "Ph.1、Ph.1.1、Ph.2の正式な機能範囲とリリース分割をどう確定するか。",
          "background": null,
          "category": null,
          "status": "partially_answered",
          "shared_status": "answer_received",
          "owner": null,
          "asked_to": null,
          "answered_by": null,
          "due_date": null,
          "answer": "QR対応時期を踏まえ、顔認証のみの先行提供とQR一体リリースのどちらにするかを要件定義で検討。",
          "answer_date": null,
          "evidence_ref": "WB-20260707-MTG",
          "source_ids": [],
          "related_open_item_ids": [
            "OPN-004"
          ],
          "related_artifacts": []
        },
        {
          "qa_id": "QA-007",
          "number": "QA-007",
          "question": "API連携を購入情報I/Fのみに限定する条件は正式決定か。",
          "background": null,
          "category": null,
          "status": "partially_answered",
          "shared_status": "answer_received",
          "owner": null,
          "asked_to": null,
          "answered_by": null,
          "due_date": null,
          "answer": "購入・決済完了通知と顔登録URL連携を軸とする構成が示されたが、正式なI/F範囲は未確定。",
          "answer_date": null,
          "evidence_ref": "WB-20260707-MTG",
          "source_ids": [],
          "related_open_item_ids": [
            "OPN-002"
          ],
          "related_artifacts": []
        },
        {
          "qa_id": "QA-008",
          "number": "QA-008",
          "question": "エンドユーザーへの顔登録URL連携および決済・チケット情報連携の責任範囲はどこか。",
          "background": null,
          "category": null,
          "status": "partially_answered",
          "shared_status": "answer_received",
          "owner": null,
          "asked_to": null,
          "answered_by": null,
          "due_date": null,
          "answer": "NSSからHITACHIへ決済完了通知し、応答として顔登録URLを連携する案。詳細責任は継続確認。",
          "answer_date": null,
          "evidence_ref": "WB-20260707-MTG",
          "source_ids": [],
          "related_open_item_ids": [
            "OPN-002"
          ],
          "related_artifacts": []
        },
        {
          "qa_id": "QA-009",
          "number": "QA-009",
          "question": "決済処理をWeChat側で完結させる前提は正式決定か。",
          "background": null,
          "category": null,
          "status": "partially_answered",
          "shared_status": "answer_received",
          "owner": null,
          "asked_to": null,
          "answered_by": null,
          "due_date": null,
          "answer": "決済はミニプログラム内で完結させる構成イメージが共有された。規約・技術可否を含め継続確認。",
          "answer_date": null,
          "evidence_ref": "WB-20260707-MTG",
          "source_ids": [],
          "related_open_item_ids": [
            "OPN-002"
          ],
          "related_artifacts": []
        },
        {
          "qa_id": "QA-010",
          "number": "QA-010",
          "question": "顔情報・個人情報をWeChatとSR間で直接連携するか。",
          "background": null,
          "category": null,
          "status": "answered",
          "shared_status": "resolved",
          "owner": null,
          "asked_to": null,
          "answered_by": null,
          "due_date": null,
          "answer": "画像データそのものをWeChatとSRサーバー間で直接やり取りする想定ではない。",
          "answer_date": null,
          "evidence_ref": "WB-20260707-MTG",
          "source_ids": [],
          "related_open_item_ids": [
            "OPN-002"
          ],
          "related_artifacts": []
        }
      ],
      "qa_counts": {
        "under_review": 1,
        "answer_received": 7,
        "waiting_customer": 1,
        "resolved": 1
      },
      "gantt": [
        {
          "stage_id": "project_launch",
          "label_ja": "プロジェクト立上げ",
          "label_zh": "项目启动",
          "primary_artifact_id": "MGT-001",
          "artifact_ids": [
            "MGT-001",
            "WBS-001"
          ],
          "qa_ids": [],
          "progress_percentage": 100,
          "artifact_status": "review_required",
          "artifact_version": "v0.2",
          "planned_start": "2026-07-01",
          "planned_end": "2026-07-31",
          "forecast_end": "2026-07-31",
          "delay_days": 0,
          "status": "completed"
        },
        {
          "stage_id": "requirements_external_if",
          "label_ja": "要件定義・外部I/F確認",
          "label_zh": "需求定义・外部接口确认",
          "primary_artifact_id": "REQ-001",
          "artifact_ids": [
            "REQ-001",
            "SCR-001",
            "API-001"
          ],
          "qa_ids": [
            "QA-001",
            "QA-002",
            "QA-003",
            "QA-004",
            "QA-005",
            "QA-006",
            "QA-007",
            "QA-008",
            "QA-009",
            "QA-010"
          ],
          "progress_percentage": 35,
          "artifact_status": "review_required",
          "artifact_version": "v0.2",
          "planned_start": "2026-07-01",
          "planned_end": "2026-09-30",
          "forecast_end": "2026-10-15",
          "delay_days": 15,
          "status": "delayed"
        },
        {
          "stage_id": "basic_detailed_design",
          "label_ja": "基本・詳細設計",
          "label_zh": "基本・详细设计",
          "primary_artifact_id": "ARC-001",
          "artifact_ids": [
            "ARC-001",
            "API-001",
            "DB-001"
          ],
          "qa_ids": [],
          "progress_percentage": 5,
          "artifact_status": "review_required",
          "artifact_version": "v0.2",
          "planned_start": "2026-08-01",
          "planned_end": "2026-10-31",
          "forecast_end": "2026-11-15",
          "delay_days": 15,
          "status": "planned"
        },
        {
          "stage_id": "development_unit_test",
          "label_ja": "開発・単体テスト",
          "label_zh": "开发・单元测试",
          "primary_artifact_id": "TST-001",
          "artifact_ids": [
            "DEV-001",
            "TST-001"
          ],
          "qa_ids": [],
          "progress_percentage": 0,
          "artifact_status": "review_required",
          "artifact_version": "v0.2",
          "planned_start": "2026-09-01",
          "planned_end": "2026-12-31",
          "forecast_end": "2027-01-15",
          "delay_days": 15,
          "status": "planned"
        },
        {
          "stage_id": "integration_system_test",
          "label_ja": "結合・総合テスト",
          "label_zh": "集成・系统测试",
          "primary_artifact_id": "TST-001",
          "artifact_ids": [
            "TST-001"
          ],
          "qa_ids": [],
          "progress_percentage": 0,
          "artifact_status": "review_required",
          "artifact_version": "v0.2",
          "planned_start": "2026-12-01",
          "planned_end": "2027-01-31",
          "forecast_end": "2027-02-15",
          "delay_days": 15,
          "status": "tentative"
        },
        {
          "stage_id": "acceptance_release",
          "label_ja": "受入テスト・リリース",
          "label_zh": "验收测试・发布",
          "primary_artifact_id": "REL-001",
          "artifact_ids": [
            "REL-001",
            "MIG-001",
            "OPS-001"
          ],
          "qa_ids": [],
          "progress_percentage": 0,
          "artifact_status": "review_required",
          "artifact_version": "v0.2",
          "planned_start": "2027-01-01",
          "planned_end": "2027-03-31",
          "forecast_end": "2027-03-31",
          "delay_days": 0,
          "status": "tentative"
        }
      ],
      "artifact_tree": {
        "project_id": "KEISEI",
        "categories": [
          {
            "category": {
              "ja": "管理",
              "zh-CN": "管理"
            },
            "artifacts": [
              {
                "artifact_id": "MGT-001",
                "title": "プロジェクト計画書",
                "status": "review_required",
                "version": "v0.2",
                "preview_path": "previews/artifacts/MGT-001.html",
                "preview_paths": {
                  "ja": "previews/artifacts/ja/MGT-001.html",
                  "zh-CN": "previews/artifacts/zh-CN/MGT-001.html",
                  "default": "previews/artifacts/MGT-001.html"
                },
                "completion_percentage": null,
                "review_status": "review_required",
                "review_comment_count": 0,
                "pending_review_comment_count": 0,
                "open_qa_count": 0,
                "sections": []
              },
              {
                "artifact_id": "WBS-001",
                "title": "WBS / スケジュール",
                "status": "review_required",
                "version": "v0.2",
                "preview_path": "previews/artifacts/WBS-001.html",
                "preview_paths": {
                  "ja": "previews/artifacts/ja/WBS-001.html",
                  "zh-CN": "previews/artifacts/zh-CN/WBS-001.html",
                  "default": "previews/artifacts/WBS-001.html"
                },
                "completion_percentage": null,
                "review_status": "review_required",
                "review_comment_count": 0,
                "pending_review_comment_count": 0,
                "open_qa_count": 0,
                "sections": []
              }
            ]
          },
          {
            "category": {
              "ja": "要件定義",
              "zh-CN": "需求定义"
            },
            "artifacts": [
              {
                "artifact_id": "REQ-001",
                "title": "要件定義書",
                "status": "review_required",
                "version": "v0.2",
                "preview_path": "previews/artifacts/REQ-001.html",
                "preview_paths": {
                  "ja": "previews/artifacts/ja/REQ-001.html",
                  "zh-CN": "previews/artifacts/zh-CN/REQ-001.html",
                  "default": "previews/artifacts/REQ-001.html"
                },
                "completion_percentage": 0,
                "review_status": "review_required",
                "review_comment_count": 0,
                "pending_review_comment_count": 0,
                "open_qa_count": 0,
                "sections": [
                  {
                    "section_id": "REQ-001-S01",
                    "section_title": "6.1 文書概要",
                    "section_order": 1
                  },
                  {
                    "section_id": "REQ-001-S02",
                    "section_title": "6.2 プロジェクト背景",
                    "section_order": 2
                  },
                  {
                    "section_id": "REQ-001-S03",
                    "section_title": "6.3 対象スコープ",
                    "section_order": 3
                  },
                  {
                    "section_id": "REQ-001-S04",
                    "section_title": "6.4 業務要件",
                    "section_order": 4
                  },
                  {
                    "section_id": "REQ-001-S05",
                    "section_title": "6.5 機能要件",
                    "section_order": 5
                  },
                  {
                    "section_id": "REQ-001-S06",
                    "section_title": "6.6 外部システム連携要件",
                    "section_order": 6
                  },
                  {
                    "section_id": "REQ-001-S07",
                    "section_title": "6.7 非機能要件",
                    "section_order": 7
                  },
                  {
                    "section_id": "REQ-001-S08",
                    "section_title": "6.8 成果物・関連文書",
                    "section_order": 8
                  },
                  {
                    "section_id": "REQ-001-S09",
                    "section_title": "6.9 リスク・課題",
                    "section_order": 9
                  },
                  {
                    "section_id": "REQ-001-S10",
                    "section_title": "6.10 確認事項",
                    "section_order": 10
                  },
                  {
                    "section_id": "REQ-001-S11",
                    "section_title": "7. 未決事項",
                    "section_order": 11
                  }
                ]
              },
              {
                "artifact_id": "SCR-001",
                "title": "画面・帳票設計書",
                "status": "review_required",
                "version": "v0.2",
                "preview_path": "previews/artifacts/SCR-001.html",
                "preview_paths": {
                  "ja": "previews/artifacts/SCR-001.html",
                  "zh-CN": "previews/artifacts/SCR-001.html",
                  "default": "previews/artifacts/SCR-001.html"
                },
                "completion_percentage": null,
                "review_status": "review_required",
                "review_comment_count": 0,
                "pending_review_comment_count": 0,
                "open_qa_count": 0,
                "sections": []
              }
            ]
          },
          {
            "category": {
              "ja": "設計",
              "zh-CN": "设计"
            },
            "artifacts": [
              {
                "artifact_id": "ARC-001",
                "title": "システム構成定義",
                "status": "review_required",
                "version": "v0.2",
                "preview_path": "previews/artifacts/ARC-001.html",
                "preview_paths": {
                  "ja": "previews/artifacts/ja/ARC-001.html",
                  "zh-CN": "previews/artifacts/zh-CN/ARC-001.html",
                  "default": "previews/artifacts/ARC-001.html"
                },
                "completion_percentage": null,
                "review_status": "review_required",
                "review_comment_count": 0,
                "pending_review_comment_count": 0,
                "open_qa_count": 0,
                "sections": []
              },
              {
                "artifact_id": "API-001",
                "title": "API確認表",
                "status": "review_required",
                "version": "v0.2",
                "preview_path": "previews/artifacts/API-001.html",
                "preview_paths": {
                  "ja": "previews/artifacts/ja/API-001.html",
                  "zh-CN": "previews/artifacts/zh-CN/API-001.html",
                  "default": "previews/artifacts/API-001.html"
                },
                "completion_percentage": null,
                "review_status": "review_required",
                "review_comment_count": 0,
                "pending_review_comment_count": 0,
                "open_qa_count": 0,
                "sections": []
              }
            ]
          },
          {
            "category": {
              "ja": "50_テスト",
              "zh-CN": "50_テスト"
            },
            "artifacts": [
              {
                "artifact_id": "TST-001",
                "title": "テスト計画",
                "status": "review_required",
                "version": "v0.2",
                "preview_path": "previews/artifacts/TST-001.html",
                "preview_paths": {
                  "ja": "previews/artifacts/ja/TST-001.html",
                  "zh-CN": "previews/artifacts/zh-CN/TST-001.html",
                  "default": "previews/artifacts/TST-001.html"
                },
                "completion_percentage": null,
                "review_status": "review_required",
                "review_comment_count": 0,
                "pending_review_comment_count": 0,
                "open_qa_count": 0,
                "sections": []
              }
            ]
          },
          {
            "category": {
              "ja": "60_リリース",
              "zh-CN": "60_リリース"
            },
            "artifacts": [
              {
                "artifact_id": "REL-001",
                "title": "リリース計画",
                "status": "review_required",
                "version": "v0.2",
                "preview_path": "previews/artifacts/REL-001.html",
                "preview_paths": {
                  "ja": "previews/artifacts/ja/REL-001.html",
                  "zh-CN": "previews/artifacts/zh-CN/REL-001.html",
                  "default": "previews/artifacts/REL-001.html"
                },
                "completion_percentage": null,
                "review_status": "review_required",
                "review_comment_count": 0,
                "pending_review_comment_count": 0,
                "open_qa_count": 0,
                "sections": []
              }
            ]
          }
        ]
      }
    }
  }
};
