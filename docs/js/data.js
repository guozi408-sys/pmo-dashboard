window.PMO_DATA = {
  "meta": {
    "project_id": "KEISEI",
    "title": "KEISEI プロジェクト管理ダッシュボード",
    "subtitle": "内部プロジェクト向け MVP",
    "version": "MVP 0.2",
    "updated_at": "2026-07-15",
    "method": "acap-methodology-v0.3.2"
  },
  "summary": {
    "current_phase": "要件定義・外部I/F確認",
    "status": "要確認事項を整理中",
    "open_items_total": 10,
    "partially_resolved": 3,
    "in_progress": 3,
    "open": 4,
    "qa_total": 10,
    "qa_answered": 1,
    "qa_partial": 7,
    "artifact_count": 8,
    "pending_artifact_impacts": 37
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
      "status": "in_progress",
      "owner": "日立製作所",
      "due_date": "2026-07-31",
      "intermediate_due_date": "2026-07-17",
      "latest_update": "現行版は7月17日目処、正式版は7月末目標で提供する。",
      "remaining_point": "現行版および正式版の実受領と、NSS側QA整理。",
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
      ]
    },
    {
      "item_id": "OPN-002",
      "title": "顔認証登録フロー、責任分界および越境データ取扱いを確定する",
      "item_kind": "issue",
      "tracking_mode": "decision_required",
      "status": "partially_resolved",
      "owner": "京成電鉄 / 日立製作所 / NSS",
      "due_date": null,
      "latest_update": "「決済完了通知→顔登録用URL連携」を軸とし、画像データ自体をWeChatとSR間で直接送受信しない前提を確認。実現可否と個人情報・越境通信条件は継続確認。",
      "remaining_point": "各社責任分界、WeChat規約、個人情報・越境通信要件、エラー時運用。",
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
      ]
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
      "latest_update": "京成向けではキャンセル不可は必須要件ではなく、購入情報を京成側で保持する前提なら実現可能性がある。",
      "remaining_point": "必要性、返金・キャンセル業務フロー、システム影響、スケジュール影響。",
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
      ]
    },
    {
      "item_id": "OPN-006",
      "title": "管理画面、非機能要件、セキュリティおよび運用保守範囲を確定する",
      "item_kind": "issue",
      "tracking_mode": "decision_required",
      "status": "open",
      "owner": "NSS / 京成電鉄",
      "due_date": null,
      "latest_update": null,
      "remaining_point": "利用者・利用目的、必要機能、対応ブラウザ、性能、冗長化、バックアップ、SLO/SLA、運用保守責任。",
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
      ]
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
      "version": "v0.1",
      "owner": "PMO",
      "file_path": "artifacts/00_management/MGT-001.md",
      "preview_path": "previews/artifacts/MGT-001.html",
      "impact_count": 5
    },
    {
      "artifact_id": "WBS-001",
      "title": "WBS / スケジュール",
      "category": "00_管理",
      "status": "review_required",
      "version": "v0.1",
      "owner": "PM",
      "file_path": "artifacts/00_management/WBS-001.md",
      "preview_path": "previews/artifacts/WBS-001.html",
      "impact_count": 7
    },
    {
      "artifact_id": "REQ-001",
      "title": "要件定義書",
      "category": "10_requirements",
      "status": "review_required",
      "version": "v0.1",
      "owner": "PM",
      "file_path": "artifacts/10_requirements/REQ-001.md",
      "preview_path": "previews/artifacts/REQ-001.html",
      "impact_count": 6
    },
    {
      "artifact_id": "SCR-001",
      "title": "画面一覧 / 画面定義",
      "category": "10_要件定義",
      "status": "review_required",
      "version": "v0.1",
      "owner": "PM",
      "file_path": "artifacts/10_requirements/SCR-001.md",
      "preview_path": "previews/artifacts/SCR-001.html",
      "impact_count": 3
    },
    {
      "artifact_id": "ARC-001",
      "title": "システム構成定義",
      "category": "20_design",
      "status": "review_required",
      "version": "v0.1",
      "owner": "Tech Lead",
      "file_path": "artifacts/20_design/ARC-001.md",
      "preview_path": "previews/artifacts/ARC-001.html",
      "impact_count": 3
    },
    {
      "artifact_id": "API-001",
      "title": "API確認表",
      "category": "20_design",
      "status": "review_required",
      "version": "v0.1",
      "owner": "Tech Lead",
      "file_path": "artifacts/20_design/API-001.md",
      "preview_path": "previews/artifacts/API-001.html",
      "impact_count": 3
    },
    {
      "artifact_id": "TST-001",
      "title": "テスト計画",
      "category": "50_テスト",
      "status": "review_required",
      "version": "v0.1",
      "owner": "QA Lead",
      "file_path": "artifacts/50_test/TST-001.md",
      "preview_path": "previews/artifacts/TST-001.html",
      "impact_count": 6
    },
    {
      "artifact_id": "REL-001",
      "title": "リリース計画",
      "category": "60_リリース",
      "status": "review_required",
      "version": "v0.1",
      "owner": "PM",
      "file_path": "artifacts/60_release/REL-001.md",
      "preview_path": "previews/artifacts/REL-001.html",
      "impact_count": 4
    }
  ],
  "batch_summary": [
    {
      "batch_id": "WB-20260707-MTG",
      "title": "キックオフミーティング 第2回",
      "automatic_updates": "既存管理記録71件を10件のOpen Itemへ統合",
      "new_candidates": "基線確立済み（次回以降PM確認）",
      "status": "applied"
    }
  ]
};
